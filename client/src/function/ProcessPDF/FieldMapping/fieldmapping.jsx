/*
This function takes in the pdf object and returns a field object that is used to fill out the pdf form.\
When adding more forms ensure the key matches the shortFormUrl variable in the processPdf.js file
*/

const fieldMapping = (pdf) => {
  const fields = {
    "2231 Direct Deposit Form": {
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
      "Acct Number": pdf.payrollFields.accountNumber,
      "Allottee Acct Number": pdf.payrollFields.allotteeAccountNumber,
      "Acct Title": pdf.payrollFields.accountTitle,
      "Allotment Acct Title": pdf.payrollFields.allotteeTitle,
      "Allottment FI Name": pdf.payrollFields.allotteeBankName,
      "FI Name": pdf.payrollFields.bankName,
      Date: pdf.userProfile.todaysDate,
    },
  };
  return fields;
};
export default fieldMapping;
