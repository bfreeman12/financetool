import { PDFDocument } from "pdf-lib";

export const fillPdfTemplate = async (formData) => {
  const form = pdfDoc.getForm();
  const ssnField = form.getTextField("SSN");
  const nameField = form.getTextField("Name");
  const homePhoneField = form.getTextField("Home Phone");
  const acctTypeField = form.getTextField("Acct Type");
  const paymentTypeField = form.getTextField("Payment Type");
  const workPhoneField = form.getTextField("Work Phone");
  const allotmentTypeField = form.getTextField("Allotment Type");
  const allotmentTypeOfAccountField = form.getTextField(
    "Allotment Type of Account"
  );
  const allotmentActionField = form.getTextField("Allotment Action");
  const allotmentAmountField = form.getTextField("Allotment Amount");
  const allotmentAmountNewTotalField = form.getTextField(
    "Allottment Amount New Total"
  );
  const allotteeNameField = form.getTextField("Allottee Name");
  const routingNumberField = form.getTextField("Routing Number");
  const allotteeRoutingNumberField = form.getTextField(
    "Allottee Routing Number"
  );
  const checkDigitField = form.getTextField("Check Digit");
  const allotteeCheckDigitField = form.getTextField("Allottee Check Digit");
  const acctNumberField = form.getTextField("Acct Number");
  const allotteeAcctNumberField = form.getTextField("Allottee Acct Number");
  const acctTitleField = form.getTextField("Acct Title");
  const allotmentAcctTitleField = form.getTextField("Allotment Acct Title");
  const allotmentFINameField = form.getTextField("Allottment FI Name");
  const fiNameField = form.getTextField("FI Name");
  const dateField = form.getTextField("Date");

  const url = "./daf594.pdf"; // URL or path to your PDF template
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  console.log(existingPdfBytes);
  const pdfDoc = await PDFDocument.load(existingPdfBytes, {
    ignoreEncryption: true,
  });

  form.getTextField("1 NAME Last First MI").setText(formData.name);
  //form.getTextField("email").setText(formData.email);
  // Set other form fields similarly

  // form.flatten(); // Optional: Flatten form fields to prevent further editing

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

// Function to download the filled PDF
export const downloadPdf = (pdfBytes, fileName) => {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
