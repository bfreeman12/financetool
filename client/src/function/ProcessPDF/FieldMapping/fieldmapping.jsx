/*
This function takes in the pdf object and returns a field object that is used to fill out the pdf form.\
When adding more forms ensure the key matches the shortFormUrl variable in the processPdf.js file
*/

const fieldMapping = (pdf) => {
  //travel voucher
  console.log(pdf.voucherFields);

  //advanced pay
  const expensePairs = pdf.advancePayFields.expenses.map((expense, index) => {
    return {
      expense: expense,
      amount: pdf.advancePayFields.expenseAmounts[index],
    };
  });

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
  //end advanced pay

  const fields = {
    "daf594.pdf": {},
    "Lost Receipt Form.pdf": {},
    //below is completed for now
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
    "DD 1351-2c.pdf": {
      Name:
        pdf.userProfile.lastName +
        ", " +
        pdf.userProfile.firstName +
        " " +
        pdf.userProfile.middleInitial,

      Itin_Date: pdf.voucherFields.departure.date.replace(/-/g, ""),
      dep1: pdf.voucherFields.departure.date,
      place1: pdf.voucherFields.departure.place,
      mode1: pdf.voucherFields.departure.meansOfTravel,
      arr2: pdf.voucherFields.travelVoucher[0]?.arrival,
      place2: pdf.voucherFields.travelVoucher[0]?.place,
      stop2: pdf.voucherFields.travelVoucher[0]?.reasonForStop,
      lodging2: pdf.voucherFields.travelVoucher[0]?.lodgingCost,
      miles2: pdf.voucherFields.travelVoucher[0]?.pocMiles,
      dep2: pdf.voucherFields.travelVoucher[0]?.departure,
      mode2: pdf.voucherFields.travelVoucher[0]?.meansOfTravel,
      arr3: pdf.voucherFields.travelVoucher[1]?.arrival,
      place3: pdf.voucherFields.travelVoucher[1]?.place,
      stop3: pdf.voucherFields.travelVoucher[2]?.reasonForStop,
      lodging3: pdf.voucherFields.travelVoucher[2]?.lodgingCost,
      miles3: pdf.voucherFields.travelVoucher[2]?.pocMiles,
      dep3: pdf.voucherFields.travelVoucher[2]?.departure,
      mode3: pdf.voucherFields.travelVoucher[2]?.meansOfTravel,
      arr4: pdf.voucherFields.travelVoucher[3]?.arrival,
      place4: pdf.voucherFields.travelVoucher[3]?.place,
      stop4: pdf.voucherFields.travelVoucher[3]?.reasonForStop,
      lodging4: pdf.voucherFields.travelVoucher[3]?.lodgingCost,
      miles4: pdf.voucherFields.travelVoucher[3]?.pocMiles,
      dep4: pdf.voucherFields.travelVoucher[3]?.departure,
      mode4: pdf.voucherFields.travelVoucher[3]?.meansOfTravel,
      arr5: pdf.voucherFields.travelVoucher[4]?.arrival,
      place5: pdf.voucherFields.travelVoucher[4]?.place,
      stop5: pdf.voucherFields.travelVoucher[4]?.reasonForStop,
      lodging5: pdf.voucherFields.travelVoucher[4]?.lodgingCost,
      miles5: pdf.voucherFields.travelVoucher[4]?.pocMiles,
      dep5: pdf.voucherFields.travelVoucher[4]?.departure,
      mode5: pdf.voucherFields.travelVoucher[4]?.meansOfTravel,
      arr6: pdf.voucherFields.travelVoucher[5]?.arrival,
      place6: pdf.voucherFields.travelVoucher[5]?.place,
      stop6: pdf.voucherFields.travelVoucher[5]?.reasonForStop,
      lodging6: pdf.voucherFields.travelVoucher[5]?.lodgingCost,
      miles6: pdf.voucherFields.travelVoucher[5]?.pocMiles,
      dep6: pdf.voucherFields.travelVoucher[5]?.departure,
      mode6: pdf.voucherFields.travelVoucher[5]?.meansOfTravel,
      arr7: pdf.voucherFields.travelVoucher[6]?.arrival,
      place7: pdf.voucherFields.travelVoucher[6]?.place,
      stop7: pdf.voucherFields.travelVoucher[6]?.reasonForStop,
      lodging7: pdf.voucherFields.travelVoucher[6]?.lodgingCost,
      miles7: pdf.voucherFields.travelVoucher[6]?.pocMiles,
      dep7: pdf.voucherFields.travelVoucher[6]?.departure,
      mode7: pdf.voucherFields.travelVoucher[6]?.meansOfTravel,
      arr8: pdf.voucherFields.travelVoucher[7]?.arrival,
      place8: pdf.voucherFields.travelVoucher[7]?.place,
      stop8: pdf.voucherFields.travelVoucher[7]?.reasonForStop,
      lodging8: pdf.voucherFields.travelVoucher[7]?.lodgingCost,
      miles8: pdf.voucherFields.travelVoucher[7]?.pocMiles,
      dep8: pdf.voucherFields.travelVoucher[7]?.departure,
      mode8: pdf.voucherFields.travelVoucher[7]?.meansOfTravel,
      arr9: pdf.voucherFields.travelVoucher[8]?.arrival,
      place9: pdf.voucherFields.travelVoucher[8]?.place,
      stop9: pdf.voucherFields.travelVoucher[8]?.reasonForStop,
      lodging9: pdf.voucherFields.travelVoucher[8]?.lodgingCost,
      miles9: pdf.voucherFields.travelVoucher[8]?.pocMiles,
      dep9: pdf.voucherFields.travelVoucher[8]?.departure,
      mode9: pdf.voucherFields.travelVoucher[8]?.meansOfTravel,
      arr10: pdf.voucherFields.travelVoucher[9]?.arrival,
      place10: pdf.voucherFields.travelVoucher[9]?.place,
      stop10: pdf.voucherFields.travelVoucher[9]?.reasonForStop,
      lodging10: pdf.voucherFields.travelVoucher[9]?.lodgingCost,
      miles10: pdf.voucherFields.travelVoucher[9]?.pocMiles,
      dep10: pdf.voucherFields.travelVoucher[9]?.departure,
      mode10: pdf.voucherFields.travelVoucher[9]?.meansOfTravel,
      arr11: pdf.voucherFields.travelVoucher[10]?.arrival,
      place11: pdf.voucherFields.travelVoucher[10]?.place,
      stop11: pdf.voucherFields.travelVoucher[10]?.reasonForStop,
      lodging11: pdf.voucherFields.travelVoucher[10]?.lodgingCost,
      miles11: pdf.voucherFields.travelVoucher[10]?.pocMiles,
      dep11: pdf.voucherFields.travelVoucher[10]?.departure,
      mode11: pdf.voucherFields.travelVoucher[10]?.meansOfTravel,
      arr12: pdf.voucherFields.travelVoucher[11]?.arrival,
      place12: pdf.voucherFields.travelVoucher[11]?.place,
      stop12: pdf.voucherFields.travelVoucher[11]?.reasonForStop,
      lodging12: pdf.voucherFields.travelVoucher[11]?.lodgingCost,
      miles12: pdf.voucherFields.travelVoucher[11]?.pocMiles,
      dep12: pdf.voucherFields.travelVoucher[11]?.departure,
      mode12: pdf.voucherFields.travelVoucher[11]?.meansOfTravel,
      arr13: pdf.voucherFields.travelVoucher[12]?.arrival,
      place13: pdf.voucherFields.travelVoucher[12]?.place,
      stop13: pdf.voucherFields.travelVoucher[12]?.reasonForStop,
      lodging13: pdf.voucherFields.travelVoucher[12]?.lodgingCost,
      miles13: pdf.voucherFields.travelVoucher[12]?.pocMiles,
      dep13: pdf.voucherFields.travelVoucher[12]?.departure,
      mode13: pdf.voucherFields.travelVoucher[12]?.meansOfTravel,
      arr14: pdf.voucherFields.travelVoucher[13]?.arrival,
      place14: pdf.voucherFields.travelVoucher[13]?.place,
      stop14: pdf.voucherFields.travelVoucher[13]?.reasonForStop,
      lodging14: pdf.voucherFields.travelVoucher[13]?.lodgingCost,
      miles14: pdf.voucherFields.travelVoucher[13]?.pocMiles,
      dep14: pdf.voucherFields.travelVoucher[13]?.departure,
      mode14: pdf.voucherFields.travelVoucher[13]?.meansOfTravel,
      arr15: pdf.voucherFields.travelVoucher[14]?.arrival,
      place15: pdf.voucherFields.travelVoucher[14]?.place,
      stop15: pdf.voucherFields.travelVoucher[14]?.reasonForStop,
      lodging15: pdf.voucherFields.travelVoucher[14]?.lodgingCost,
      miles15: pdf.voucherFields.travelVoucher[14]?.pocMiles,
      dep15: pdf.voucherFields.travelVoucher[14]?.departure,
      mode15: pdf.voucherFields.travelVoucher[14]?.meansOfTravel,
      arr16: pdf.voucherFields.arrival.date,
      place16: pdf.voucherFields.arrival.place,
      stop16: pdf.voucherFields.arrival.reasonForStop,
      lodging16: pdf.voucherFields.arrival.lodgingCost,
      miles16: pdf.voucherFields.arrival.pocMiles,
      date18a1: pdf.voucherFields.reimbursableExpense[0]?.date,
      expense1: pdf.voucherFields.reimbursableExpense[0]?.natureOfExpense,
      amt1: pdf.voucherFields.reimbursableExpense[0]?.amount,
      allow1: pdf.voucherFields.reimbursableExpense[0]?.allowed,
      date18a2: pdf.voucherFields.reimbursableExpense[1]?.date,
      expense2: pdf.voucherFields.reimbursableExpense[1]?.natureOfExpense,
      amt2: pdf.voucherFields.reimbursableExpense[1]?.amount,
      allow2: pdf.voucherFields.reimbursableExpense[1]?.allowed,
      date18a3: pdf.voucherFields.reimbursableExpense[2]?.date,
      expense3: pdf.voucherFields.reimbursableExpense[2]?.natureOfExpense,
      amt3: pdf.voucherFields.reimbursableExpense[2]?.amount,
      allow3: pdf.voucherFields.reimbursableExpense[2]?.allowed,
      date18a4: pdf.voucherFields.reimbursableExpense[3]?.date,
      expense4: pdf.voucherFields.reimbursableExpense[3]?.natureOfExpense,
      amt4: pdf.voucherFields.reimbursableExpense[3]?.amount,
      allow4: pdf.voucherFields.reimbursableExpense[3]?.allowed,
      date18a5: pdf.voucherFields.reimbursableExpense[4]?.date,
      expense5: pdf.voucherFields.reimbursableExpense[4]?.natureOfExpense,
      amt5: pdf.voucherFields.reimbursableExpense[4]?.amount,
      allow5: pdf.voucherFields.reimbursableExpense[4]?.allowed,
      date18a6: pdf.voucherFields.reimbursableExpense[5]?.date,
      expense6: pdf.voucherFields.reimbursableExpense[5]?.natureOfExpense,
      amt6: pdf.voucherFields.reimbursableExpense[5]?.amount,
      allow6: pdf.voucherFields.reimbursableExpense[5]?.allowed,
      date18a7: pdf.voucherFields.reimbursableExpense[6]?.date,
      expense7: pdf.voucherFields.reimbursableExpense[6]?.natureOfExpense,
      amt7: pdf.voucherFields.reimbursableExpense[6]?.amount,
      allow7: pdf.voucherFields.reimbursableExpense[6]?.allowed,
      date18a8: pdf.voucherFields.reimbursableExpense[7]?.date,
      expense8: pdf.voucherFields.reimbursableExpense[7]?.natureOfExpense,
      amt8: pdf.voucherFields.reimbursableExpense[7]?.amount,
      allow8: pdf.voucherFields.reimbursableExpense[7]?.allowed,
      date19a1: pdf.voucherFields.deductableMeals[0]?.date.replace(/-/g, ""),
      meals1: pdf.voucherFields.deductableMeals[0]?.numberOfMeals,
      date19a2: pdf.voucherFields.deductableMeals[1]?.date.replace(/-/g, ""),
      meals2: pdf.voucherFields.deductableMeals[1]?.numberOfMeals,
      date19a3: pdf.voucherFields.deductableMeals[2]?.date.replace(/-/g, ""),
      meals3: pdf.voucherFields.deductableMeals[2]?.numberOfMeals,
      date19a4: pdf.voucherFields.deductableMeals[3]?.date.replace(/-/g, ""),
      meals4: pdf.voucherFields.deductableMeals[3]?.numberOfMeals,
      date19a5: pdf.voucherFields.deductableMeals[4]?.date.replace(/-/g, ""),
      meals5: pdf.voucherFields.deductableMeals[4]?.numberOfMeals,
      date19a6: pdf.voucherFields.deductableMeals[5]?.date.replace(/-/g, ""),
      meals6: pdf.voucherFields.deductableMeals[5]?.numberOfMeals,
      Remarks: pdf.voucherFields.remarks,
    },
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
