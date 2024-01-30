import { PDFDocument, PDFRadioGroup, PDFTextField } from "pdf-lib";
import fieldMapping from "./FieldMapping/fieldmapping";
export const fillDirectDepositForm = async (formUrl, pdf) => {
  const LongFormUrl = "/pdf/" + formUrl[0];

  const formPdfBytes = await fetch(LongFormUrl).then((res) =>
    res.arrayBuffer()
  );
  const pdfDoc = await PDFDocument.load(formPdfBytes, {
    ignoreEncryption: true,
  });
  const form = pdfDoc.getForm();
  const mappingFields = fieldMapping(pdf); //returns an object with all of the mapped fields
  const formFieldsToSet = mappingFields[formUrl]; //returns an object with all of the mapped fields for the specific form

  for (const fieldName in formFieldsToSet) {
    const fieldValue = formFieldsToSet[fieldName];
    const field = form.getField(fieldName);
    if (field) {
      try {
        if (field.constructor.name === "PDFRadioGroup2") {
          field.select(fieldValue);
        } else if (field.constructor.name === "PDFTextField2") {
          field.setText(fieldValue);
          if (fieldName === fieldValue) {
            field.select(fieldValue);
          }
        } else if (field.constructor.name === "PDFCheckBox2") {
          if (field.getName() == fieldName && fieldValue) {
            field.check();
          }
        } else {
          console.log(field);
        }
      } catch (error) {
        console.error(`Error setting field ${fieldName}:`, error);
      }
    }
  }

  const pdfBytes = await pdfDoc.save();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  const new_url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = new_url;
  console.log(LongFormUrl);
  const filename = LongFormUrl.substring(
    LongFormUrl.lastIndexOf("/") + 1,
    LongFormUrl.lastIndexOf(".")
  );
  link.download = filename + " (" + pdf.userProfile.lastName + ").pdf";
  link.click();
  return pdfBytes;
};
