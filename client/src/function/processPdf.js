import { PDFDocument, PDFRadioGroup, PDFTextField } from "pdf-lib";
export const fillDirectDepositForm = async (formUrl, pdf) => {
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes, {
    ignoreEncryption: true,
  });
  const form = pdfDoc.getForm();
  const formFieldsToSet = {
    SSN: pdf.userProfile.ssn,
    Name:
      pdf.userProfile.lastName +
      ", " +
      pdf.userProfile.firstName +
      " " +
      pdf.userProfile.middleInitial,
    "Home Phone": pdf.userProfile.cellphone,
    "Acct Type": pdf.payrollFields.accountType,
    "Payment Type": pdf.payrollFields.paymentType,
    "Work Phone": pdf.userProfile.workPhone,
    "Allotment Type": pdf.payrollFields.allotmentType,
    "Allotment Type of Account": pdf.payrollFields.allotteeAccountType,
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
    const field = form.getField(fieldName);
    if (field) {
      try {
        if (field.constructor.name === "PDFRadioGroup2") {
          field.select(fieldValue);
        } else if (field.constructor.name === "PDFTextField2") {
          field.setText(fieldValue);
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
  link.download = formUrl.split("/").pop();
  link.click();
  return pdfBytes;
};
