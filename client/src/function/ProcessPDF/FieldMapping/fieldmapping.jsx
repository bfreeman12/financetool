/*
This function takes in the pdf object and returns a field object that is used to fill out the pdf form.\
When adding more forms ensure the key matches the shortFormUrl variable in the processPdf.js file
*/

const fieldMapping = (pdf) => {
  // expenses[];
  // expenseAmounts[];
  // expenseTotal;
  // expenseExplanation;
  // numberOfDependents;
  // financialSituationSpecifics;
  // remarks;

  // FillText3
  // FillText6
  // FillText7

  const expensePairs = pdf.advancePayFields.expenses.map((expense, index) => {
    return {
      expense: expense,
      amount: pdf.advancePayFields.expenseAmounts[index],
    };
  });

  console.log(expensePairs);

  let requestType1Month = "";
  let requestTypeMoreMonth = "";
  if (
    pdf.advancePayFields.payRequestType ==
    "More than 1 month but less than 3 months"
  ) {
    requestTypeMoreMonth = "X";
  } else if (pdf.advancePayFields.payRequestType == "One month advance pay") {
    requestType1Month = "X";
  }

  let paymentSchedule1YearOrLess = "";
  let paymentScheduleMoreThan1Year = "";
  let shortNumberOfMonths = "";
  let longNumberOfMonths = "";
  if (pdf.advancePayFields.payRequestSchedule == "12 months or less") {
    paymentSchedule1YearOrLess = "X";
    shortNumberOfMonths = pdf.advancePayFields.numberOfMonths;
  } else if (pdf.advancePayFields.payRequestSchedule == "13-24 months") {
    paymentScheduleMoreThan1Year = "X";
    longNumberOfMonths = pdf.advancePayFields.numberOfMonths;
  }

  let requestPaymentShort = "";
  let requestPaymentMedium = "";
  let requestPaymentLong = "";
  if (
    pdf.advancePayFields.advancedPayRequestTime ==
    "Within 30 days of PCS or 60 days after reporting to next PCS"
  ) {
    requestPaymentShort = "X";
  } else if (
    pdf.advancePayFields.advancedPayRequestTime == "31-90 days before my PCS"
  ) {
    requestPaymentMedium = "X";
  } else if (
    pdf.advancePayFields.advancedPayRequestTime ==
    "61-180 days after arrival at my PDS"
  ) {
    requestPaymentLong = "X";
  }

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
      a_Check: pdf.fsaFields.divorced,
      b_Check: pdf.fsaFields.legalCustody,
      c_Check: pdf.fsaFields.dependentMilitary,
      d_Check: pdf.fsaFields.dependentMilitary,
      e_Check: pdf.fsaFields.institution,
      f_Check: pdf.fsaFields.parents,
      g_Check: pdf.fsaFields.marriedToActive,
      Spouse_DoDID: pdf.fsaFields.spouseDodId,
      Branch_And_Component: pdf.fsaFields.spouseBranchComponent,

      Member_Signature_Date: pdf.userProfile.todaysDate,
    },
    "DD FORM 2560 pay advance.pdf": {
      "1_NAME_Last_First_Middle":
        pdf.userProfile.lastName +
        ", " +
        pdf.userProfile.firstName +
        " " +
        pdf.userProfile.middleInitial,
      "2_SOCIAL_SECURITY_NO": pdf.userProfile.ssn,
      "3_GRADE": pdf.userProfile.userGrade,
      FillText1: requestType1Month,
      FillText4: requestTypeMoreMonth,
      FillText22: pdf.advancePayFields.specificAmount,
      FillText2: paymentSchedule1YearOrLess,
      FillText5: paymentScheduleMoreThan1Year,
      a_12_MONTHS_OR_LESS_Speci: shortNumberOfMonths,
      b_13__24_MONTHS_Parts_and: longNumberOfMonths,
      FillText3: requestPaymentShort,
      FillText6: requestPaymentMedium,
      FillText7: requestPaymentLong,
      a: expensePairs[0]?.expense,
      amount7a: expensePairs[0]?.amount,
      b: expensePairs[1]?.expense,
      amount7b: expensePairs[1]?.amount,
      C: expensePairs[2]?.expense,
      amount7c: expensePairs[2]?.amount,
      d: expensePairs[3]?.expense,
      amount7d: expensePairs[3]?.amount,
      e: expensePairs[4]?.expense,
      amount7e: expensePairs[4]?.amount,
      f: expensePairs[5]?.expense,
      amount7f: expensePairs[5]?.amount,
      totalamount: String(pdf.advancePayFields.expenseTotal),
      FillText23: pdf.advancePayFields.expenseExplanation,
      "1_1_NO_OF_DEPENDENTS": pdf.advancePayFields.numberOfDependents,
      FillText24: pdf.advancePayFields.financialSituationSpecifics,
      "14_DATE_YYMMDD": pdf.userProfile.todaysDate,
    },
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
