/*
This function takes in the pdf object and returns a field object that is used to fill out the pdf form.\
When adding more forms ensure the key matches the shortFormUrl variable in the processPdf.js file
*/

const fieldMapping = (pdf) => {
  console.log(pdf);
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
    "daf594.pdf": {},
    "DD 1351-2c.pdf": {},
    "DD Form 1561.pdf": {
      Name_Of_Member:
        pdf.userProfile.lastName +
        ", " +
        pdf.userProfile.firstName +
        " " +
        pdf.userProfile.middleInitial,
      Grade: pdf.userProfile.userGrade,
      DoDID: pdf.userProfile.dodId,
      Branch_And_Organization:
        pdf.userProfile.userBranch + " " + pdf.fsaFields.org,
      Date_Departed_Residence: pdf.fsaFields.dateDeparted,
      Dependents_Addresses: pdf.fsaFields.dependentAddress,
      // "form1[0].Table4[0].Row2[0].RadioButtonList[0]":
      // pdf.fsaFields.fsaType || "",
      //certification checkboxes
      a_Check: "Check",
      b_Check: pdf.fsaFields.legalCustody,
      c_Check: pdf.fsaFields.dependentMilitary,
      d_Check: pdf.fsaFields.institution,
      e_Check: pdf.fsaFields.parents,
      f_Check: pdf.fsaFields.marriedToActive,
      g_Check: pdf.fsaFields.wasResiding,
      Spouse_DoDID: pdf.fsaFields.spouseDodId,
      Branch_And_Component: pdf.fsaFields.spouseBranchComponent,

      Member_Signature_Date: pdf.userProfile.todaysDate,
    },
    "DD FORM 2560 pay advance.pdf": {},
    "Lost Receipt Form.pdf": {},
    "State of Legal Residence - DD Form 2058.pdf": {
      Name: pdf.userProfile.lastName + ", " + pdf.userProfile.firstName,
      DoDID: pdf.userProfile.dodId,
      Legal_Residence: pdf.legalResidenceFields.legalResidence,
      Mailing_Address: pdf.legalResidenceFields.mailingAddress,
      Date: pdf.userProfile.todaysDate,
    },
  };
  return fields;
};
export default fieldMapping;
