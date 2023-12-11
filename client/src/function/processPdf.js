import { PDFDocument, PDFRadioGroup, PDFTextField } from "pdf-lib";
export const fillDirectDepositForm = async (formUrl, pdf) => {
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes, {
    ignoreEncryption: true,
  });
  const form = pdfDoc.getForm();

  const formFieldsToSet = {
    "Home Phone": pdf.userProfile.cellphone,
    "Acct Type": pdf.payrollFields.accountType,
    "Payment Type": pdf.payrollFields.paymentType,
    "Work Phone": pdf.userProfile.workPhone,
    "Allotment Type": pdf.payrollFields.allotmentType,
    "Allotment Type of Account": pdf.payrollFields.allotmentTypeOfAccount,
    "Allotment Action": pdf.payrollFields.allotmentAction,
    "Allotment Amount": pdf.payrollFields.allotmentAmount,
    "Allottment Amount New Total": pdf.payrollFields.allotmentNewTotal,
    "Allottee Name": pdf.payrollFields.allotteeName,
    "Routing Number": pdf.payrollFields.routingNumber.slice(0, 8),
    "Allottee Routing Number": pdf.payrollFields.allotteeRoutingNumber.slice(
      0,
      8
    ),
    "Allottee Check Digit": pdf.payrollFields.allotteeCheckDigit,
    "Check Digit": pdf.payrollFields.checkDigit,
    "Allottee Check Digit": pdf.payrollFields.allotteeCheckDigit,
    "Acct Number": pdf.payrollFields.accountNumber,
    "Allottee Acct Number": pdf.payrollFields.allotteeAccountNumber,
    "Acct Title": pdf.payrollFields.accountTitle,
    "Allotment Acct Title": pdf.payrollFields.allotteeTitle,
    "Allottment FI Name": pdf.payrollFields.allotteeBankName,
    "FI Name": pdf.payrollFields.bankName,
    Date: pdf.userProfile.todaysDate,
  };

  for (const fieldName in formFieldsToSet) {
    const fieldValue = formFieldsToSet[fieldName];
    const field = form.getField(fieldName); // Get the field by name

    if (field) {
      // Check the type of the field
      if (field.constructor.name === "PDFRadioGroup2") {
        // It's a radio button group
        // field.select(fieldValue);
      } else if (field.constructor.name === "PDFTextField2") {
        // It's a text field
        field.setText(fieldValue);
      } else {
        console.log(field);
        // Handle other field types if needed
      }
    }
  }

  const pdfBytes = await pdfDoc.save();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Step 7: Create a download URL for the `Blob`.
  const new_url = URL.createObjectURL(blob);

  // Step 8: Create a link element and simulate a click event to trigger the download.
  const link = document.createElement("a");
  link.href = new_url;
  link.download = "filled_form.pdf";
  link.click();
  return pdfBytes;
};

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
