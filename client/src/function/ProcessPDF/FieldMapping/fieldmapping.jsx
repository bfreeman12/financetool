/*
This function takes in the pdf object and returns a field object that is used to fill out the pdf form.\
When adding more forms ensure the key matches the shortFormUrl variable in the processPdf.js file
*/

const fieldMapping = (pdf) => {
  console.log(pdf);
  //bah form
  let mbrSingleNoDep = false;
  let mbrSingleWDeps = false;
  let mbrMarriedCiv = false;
  let mbrMarriedMil = false;

  if (pdf.bahFields.maritalStatus == "SINGLE, NO DEPENDENTS") {
    mbrSingleNoDep = true;
  } else if (pdf.bahFields.maritalStatus == "SINGLE, CLAIMING DEPENDENT(S)") {
    mbrSingleWDeps = true;
  } else if (pdf.bahFields.maritalStatus == "MARRIED - SPOUSE IS A CIVILIAN") {
    mbrMarriedCiv = true;
  } else if (pdf.bahFields.maritalStatus == "MILITARY MEMBER") {
    mbrMarriedMil = true;
  }

  let firstApplicationYes = false;
  let firstApplicationNo = false;
  if (pdf.bahFields.firstApplication == true) {
    firstApplicationYes = true;
  } else firstApplicationNo = true;

  let custodyFullAmountYes = false;
  let custodyFulLAmountNo = false;
  if (pdf.bahFields.nonCustodialFullAmount == true) {
    custodyFullAmountYes = true;
  } else custodyFulLAmountNo = true;

  let custodyBasedOnDivorce = false;
  let custodyBasedOnLegalSep = false;
  let custodyBasedOnCourtOrder = false;
  let custodyBasedOnAgreement = false;
  if (pdf.bahFields.custodyBasedOn == "Divorce decree") {
    custodyBasedOnDivorce = true;
  } else if (pdf.bahFields.custodyBasedOn == "Legal separation agreement") {
    custodyBasedOnLegalSep = true;
  } else if (pdf.bahFields.custodyBasedOn == "Court Order") {
    custodyBasedOnCourtOrder = true;
  } else if (
    pdf.bahFields.custodyBasedOn == "Written agreement with child's custodian"
  ) {
    custodyBasedOnAgreement = true;
  }

  let dependentInCustody = false;
  let dependentNotInCustody = false;
  let notClaimingDependent = false;
  if (pdf.bahFields.claimingDependent == "In my legal and physical custody") {
    dependentInCustody = true;
  } else if (
    pdf.bahFields.claimingDependent == "Not in my legal and physical custody"
  ) {
    dependentNotInCustody = true;
  } else if (pdf.bahFields.claimingDependent == "Not claiming dependent") {
    notClaimingDependent = true;
  }

  //end bah form

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
    "Lost Receipt Form.pdf": {
      lodging_name: pdf.lostRecieptFields.lodgingInfo[0]?.hotelName,
      lodging_city: pdf.lostRecieptFields.lodgingInfo[0]?.hotelCity,
      lodging_state_country: pdf.lostRecieptFields.lodgingInfo[0]?.hotelState,
      checkin_date: pdf.lostRecieptFields.lodgingInfo[0]?.checkInDate,
      checkout_date: pdf.lostRecieptFields.lodgingInfo[0]?.checkOutDate,
      daily_room_rate: pdf.lostRecieptFields.lodgingInfo[0]?.dailyRoomRate,
      daily_tax: pdf.lostRecieptFields.lodgingInfo[0]?.dailyTax,
      total_cost: pdf.lostRecieptFields.lodgingInfo[0]?.totalCost,
      lodging_name2: pdf.lostRecieptFields.lodgingInfo[1]?.hotelName,
      lodging_city2: pdf.lostRecieptFields.lodgingInfo[1]?.hotelCity,
      lodging_state_country2: pdf.lostRecieptFields.lodgingInfo[1]?.hotelState,
      daily_tax2: pdf.lostRecieptFields.lodgingInfo[1]?.dailyTax,
      total_cost2: pdf.lostRecieptFields.lodgingInfo[1]?.totalCost,
      daily_room_rate2: pdf.lostRecieptFields.lodgingInfo[1]?.dailyRoomRate,
      checkout_date2: pdf.lostRecieptFields.lodgingInfo[1]?.checkOutDate,
      checkin_date2: pdf.lostRecieptFields.lodgingInfo[1]?.checkInDate,
      cto_fee: pdf.lostRecieptFields.airfareInfo[0]?.ctoFee,
      total_cost_airfare: pdf.lostRecieptFields.airfareInfo[0]?.totalCost,
      airfare_taxes: pdf.lostRecieptFields.airfareInfo[0]?.airfareTaxes,
      base_airfare_cost: pdf.lostRecieptFields.airfareInfo[0]?.baseAirfare,
      date_travelled_airfare:
        pdf.lostRecieptFields.airfareInfo[0]?.dateTravelled,
      travelto_city_state_country:
        pdf.lostRecieptFields.airfareInfo[0]?.travelTo,
      travelfrom_city_state_country:
        pdf.lostRecieptFields.airfareInfo[0]?.travelFrom,
      airfare_carrier: pdf.lostRecieptFields.airfareInfo[0]?.carrierName,
      airfare_carrier2: pdf.lostRecieptFields.airfareInfo[1]?.carrierName,
      travelfrom_city_state_country2:
        pdf.lostRecieptFields.airfareInfo[1]?.travelFrom,
      travelto_city_state_country2:
        pdf.lostRecieptFields.airfareInfo[1]?.travelTo,
      date_travelled_airfare2:
        pdf.lostRecieptFields.airfareInfo[1]?.dateTravelled,
      base_airfare_cost2: pdf.lostRecieptFields.airfareInfo[1]?.baseAirfare,
      airfare_taxes2: pdf.lostRecieptFields.airfareInfo[1]?.airfareTaxes,
      cto_fee2: pdf.lostRecieptFields.airfareInfo[1]?.ctoFee,
      rental_car_company_name: pdf.lostRecieptFields.carRentalCompanyName,
      date_vehicle_rented: pdf.lostRecieptFields.dateRentalRented,
      date_vehicle_returned: pdf.lostRecieptFields.dateRentalReturned,
      basic_rental_rate: pdf.lostRecieptFields.basicRentalRate,
      rental_taxes: pdf.lostRecieptFields.carRentalTax,
      rental_insurance_oconus: pdf.lostRecieptFields.carRentalInsurance,
      fuel_paid_advance: pdf.lostRecieptFields.carRentalFuelAdvance,
      rental_total_cost: pdf.lostRecieptFields.carRentalTotalCost,
      taxi_company_name: pdf.lostRecieptFields.taxiCompanyName,
      taxi_travelfrom: pdf.lostRecieptFields.taxiTravelFrom,
      taxi_travelto: pdf.lostRecieptFields.taxiTravelTo,
      taxi_basic_fare: pdf.lostRecieptFields.taxiBasicFare,
      taxi_tip: pdf.lostRecieptFields.taxiTip,
      other_transport_name:
        pdf.lostRecieptFields.otherTransportationCompanyName,
      other_travelfrom: pdf.lostRecieptFields.otherTransportationTravelFrom,
      other_travelto: pdf.lostRecieptFields.otherTransportationTravelTo,
      other_travel_type: pdf.lostRecieptFields.otherTransportationType,
      other_base_cost: pdf.lostRecieptFields.otherTransportationCost,
      other_taxes: pdf.lostRecieptFields.otherTransportationTaxes,
      other_tip: pdf.lostRecieptFields.otherTransportationTips,
      other_total_cost: pdf.lostRecieptFields.otherTransportationTotalCost,
      conference_fee: pdf.lostRecieptFields.conferenceTotalCost,
      conference_paid_to: pdf.lostRecieptFields.conferencePaidTo,
      conference_total_cost: pdf.lostRecieptFields.conferenceTotalCost,
      other_expenses: pdf.lostRecieptFields.otherExpensePurpose,
      other_date_of_expense: pdf.lostRecieptFields.otherExpenseDate,
      shared_room_check_yes: pdf.lostRecieptFields.lodgingInfo[0]?.wasShared
        ? true
        : false,
      shared_room_check_no: pdf.lostRecieptFields.lodgingInfo[0]?.wasShared
        ? false
        : true,
      other_expense_total_cost: pdf.lostRecieptFields.otherExpenseTotalCost,
      traveler_name: pdf.lostRecieptFields.travellerName,
      date_signed: pdf.userProfile.todaysDate,
      shared_room_orders_check_yes: pdf.lostRecieptFields.lodgingInfo[0]
        ?.wasOnOrders
        ? true
        : false,
      shared_room_orders_check_no: pdf.lostRecieptFields.lodgingInfo[0]
        ?.wasOnOrders
        ? false
        : true,
      shared_room_check_no2: pdf.lostRecieptFields.lodgingInfo[1]?.wasShared,
      airfare_billed_check_individual:
        pdf.lostRecieptFields.airfareInfo[0]?.airfarePurchasedWith ==
        "My individually billed GTC / CSA"
          ? true
          : false,
      ticket_purchased_cto_yes: pdf.lostRecieptFields.airfareInfo[0]
        ?.ticketPurchasedThroughCto
        ? true
        : false,
      ticket_purchased_cto_no: pdf.lostRecieptFields.airfareInfo[0]
        ?.ticketPurchasedThroughCto
        ? false
        : true,
      airfare_billed_check_unit:
        pdf.lostRecieptFields.airfareInfo[0]?.airfarePurchasedWith ==
        "My unit's centrally billed GTC (CBA)"
          ? true
          : false,
      airfare_billed_check_personal_credit:
        pdf.lostRecieptFields.airfareInfo[0]?.airfarePurchasedWith ==
        "A personal credit card"
          ? true
          : false,
      indirect_routing_check_yes: pdf.lostRecieptFields.airfareInfo[0]
        ?.wasIndirectRoutingUsed
        ? true
        : false,
      indirect_routing_check_no: pdf.lostRecieptFields.airfareInfo[0]
        ?.wasIndirectRoutingUsed
        ? false
        : true,
      ticket_purchased_cto_yes2: pdf.lostRecieptFields.airfareInfo[1]
        ?.ticketPurchasedThroughCto
        ? true
        : false,
      ticket_purchased_cto_no2: pdf.lostRecieptFields.airfareInfo[1]
        ?.ticketPurchasedThroughCto
        ? false
        : true,
      airfare_billed_check_individual2:
        pdf.lostRecieptFields.airfareInfo[1]?.airfarePurchasedWith ==
        "My individually billed GTC / CSA"
          ? true
          : false,
      airfare_billed_check_unit2:
        pdf.lostRecieptFields.airfareInfo[1]?.airfarePurchasedWith ==
        "My unit's centrally billed GTC (CBA)"
          ? true
          : false,
      airfare_billed_check_personal_credit2:
        pdf.lostRecieptFields?.airfareInfo[1]?.airfarePurchasedWith ==
        "A personal credit card"
          ? true
          : false,
      indirect_routing_check_yes2: pdf.lostRecieptFields?.airfareInfo[1]
        ?.wasIndirectRoutingUsed
        ? true
        : false,
      indirect_routing_check_no2: pdf.lostRecieptFields?.airfareInfo[1]
        ?.wasIndirectRoutingUsed
        ? false
        : true,
      meals_included_check_yes: pdf.lostRecieptFields?.mealsIncluded
        ? true
        : false,
      meals_included_check_no: pdf.lostRecieptFields?.mealsIncluded
        ? false
        : true,
      lodging_included_check_yes: pdf.lostRecieptFields?.lodgingIncluded
        ? true
        : false,
      lodging_included_check_no: pdf.lostRecieptFields?.lodgingIncluded
        ? false
        : true,
      shared_room_check_yes2: pdf.lostRecieptFields.lodgingInfo[1]?.wasShared
        ? true
        : false,
      shared_room_orders_check_yes2: pdf.lostRecieptFields?.lodgingInfo[1]
        ?.wasOnOrders
        ? true
        : false,
      shared_room_orders_check_no2: pdf.lostRecieptFields?.lodgingInfo[1]
        ?.wasOnOrders
        ? false
        : true,
      rental_total_cost2: pdf.lostRecieptFields.carRentalTotalCost,
      taxi_total_cost: pdf.lostRecieptFields.taxiTotalCost,
    },
    "daf594.pdf": {
      MBR_Name:
        pdf.userProfile.lastName +
        ", " +
        pdf.userProfile.firstName +
        " " +
        pdf.userProfile.middleInitial,
      MBR_Grade: pdf.userProfile.userGrade,
      MBR_Duty_Location:
        pdf.bahFields.dutyLocation +
        " " +
        pdf.bahFields.dutyLocationState +
        " " +
        pdf.bahFields.dutyLocationZip +
        " " +
        pdf.bahFields.dutyLocationState +
        " " +
        pdf.bahFields.dutyLocationCountry,
      MBR_DoDID: pdf.userProfile.dodId,
      MBR_Phone: pdf.userProfile.cellphone,
      "MBR_E-Mail": pdf.userProfile.email,
      MBR_Address:
        pdf.bahFields.memberStreet +
        " " +
        pdf.bahFields.memberCity +
        " " +
        pdf.bahFields.memberState +
        " " +
        pdf.bahFields.memberZip,

      MBR_Single_No_Dep_Check: mbrSingleNoDep,
      MBR_Single_Dep_Check: mbrSingleWDeps,
      MBR_Spouse_Civ_Check: mbrMarriedCiv,
      MBR_Spouse_Mil_Check: mbrMarriedMil,

      MBR_Divorce_Check: pdf.bahFields.divorced,
      MBR_Sep_Check: pdf.bahFields.separated,
      MBR_Divorce_Date: pdf.bahFields.divorceDate,
      MBR_Sep_Date: pdf.bahFields.legalSeperationDate,

      MBR_Mil_Spouse_Name: pdf.bahFields.dependentMilitaryName,
      MBR_Spouse_Duty_Station: pdf.bahFields.dependentMilitaryStation,
      MBR_Spouse_DoDID: pdf.bahFields.dependentMilitaryDODID,
      MBR_Spouse_Branch: pdf.bahFields.dependentMilitaryBranch,

      MBR_Spouse_Information:
        pdf.bahFields.spouseName +
        " " +
        pdf.bahFields.spouseDodId +
        " " +
        pdf.bahFields.spouseBranch +
        " " +
        pdf.bahFields.spouseDutyStation +
        " " +
        pdf.bahFields.spouseDateOfMarriage,

      MBR_Dep1_Name: pdf.bahFields.dependents[0]?.name,
      MBR_Dep1_Address: pdf.bahFields.dependents[0]?.address,
      MBR_Dep1_Relationship: pdf.bahFields.dependents[0]?.relationship,
      MBR_Dep1_DOB: pdf.bahFields.dependents[0]?.dob,

      MBR_Dep2_Name: pdf.bahFields.dependents[1]?.name,
      MBR_Dep2_Address: pdf.bahFields.dependents[1]?.address,
      MBR_Dep2_Relationship: pdf.bahFields.dependents[1]?.relationship,
      MBR_Dep2_DOB: pdf.bahFields.dependents[1]?.dob,

      MBR_Dep3_Name: pdf.bahFields.dependents[2]?.name,
      MBR_Dep3_Address: pdf.bahFields.dependents[2]?.address,
      MBR_Dep3_Relationship: pdf.bahFields.dependents[2]?.relationship,
      MBR_Dep3_DOB: pdf.bahFields.dependents[2]?.dob,

      MBR_Dep4_Name: pdf.bahFields.dependents[3]?.name,
      MBR_Dep4_Address: pdf.bahFields.dependents[3]?.address,
      MBR_Dep4_Relationship: pdf.bahFields.dependents[3]?.relationship,
      MBR_Dep4_DOB: pdf.bahFields.dependents[3]?.dob,

      MBR_Dep5_Name: pdf.bahFields.dependents[4]?.name,
      MBR_Dep5_Address: pdf.bahFields.dependents[4]?.address,
      MBR_Dep5_Relationship: pdf.bahFields.dependents[4]?.relationship,
      MBR_Dep5_DOB: pdf.bahFields.dependents[4]?.dob,

      MBR_Dep6_Name: pdf.bahFields.dependents[5]?.name,
      MBR_Dep6_Address: pdf.bahFields.dependents[5]?.address,
      MBR_Dep6_Relationship: pdf.bahFields.dependents[5]?.relationship,
      MBR_Dep6_DOB: pdf.bahFields.dependents[5]?.dob,

      MBR_First_Application_Yes: firstApplicationYes,
      MBR_First_Application_No: firstApplicationNo,
      MBR_Certification: pdf.bahFields.memberCertification,

      MBR_Support_Full_AMT_Check: custodyFullAmountYes,
      MBR_Support_AMT_Check: custodyFulLAmountNo,
      MBR_Support_AMT: pdf.bahFields.nonCustodialPerMonth,

      MBR_Support_AMT_Divorce_Check: custodyBasedOnDivorce,
      MBR_Support_AMT_Court_Order_Check: custodyBasedOnCourtOrder,
      MBR_Support_AMT_Legal_Sep_Check: custodyBasedOnLegalSep,
      MBR_Support_AMT_Agreement_Check: custodyBasedOnAgreement,

      MBR_BAH_Dep_Check: notClaimingDependent,
      MBR_BAH_Dep_In_Custody_Check: dependentInCustody,
      MBR_BAH_Dep_Not_Custody_Check: dependentNotInCustody,

      MBR_Second_DEP_date: pdf.bahFields.firstApplicationDate,
      MBR_Custody_date: pdf.bahFields.custodyDate,

      MBR_Sign_date: pdf.userProfile.todaysDate,
    },
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

      Itin_Date: pdf.voucherFields.departure.date,
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
