import { PDFDocument, PDFRadioGroup, PDFTextField } from "pdf-lib";
import fieldMapping from "./FieldMapping/fieldmapping";
import JSZip from "jszip";

export const fillForm = async (formUrls, pdf) => {
  const zip = new JSZip();
  let pdfBytes;
  let filename;
  for (const formUrl of formUrls) {
    const LongFormUrl = "/pdf/" + formUrl;

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

    pdfBytes = await pdfDoc.save();
    filename =
      LongFormUrl.substring(
        LongFormUrl.lastIndexOf("/") + 1,
        LongFormUrl.lastIndexOf(".")
      ) +
      " (" +
      pdf.userProfile.lastName +
      ").pdf";
    zip.file(filename, pdfBytes);
  }

  if (formUrls.length > 1) {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "forms.zip";
      link.click();
    });
  } else {
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const new_url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = new_url;
    link.download = filename;
    link.click();
  }
};
