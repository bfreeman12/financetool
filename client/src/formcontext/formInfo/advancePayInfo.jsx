import { useState } from "react";

export const useAdvancePayInfo = () => {
  /*      request
    needs name and date from user profile
    needs ssn from user profile
    needs grade
  */
  const [payRequestType, setPayRequestType] = useState("");
  const [specificAmount, setSpecificAmount] = useState("");
  const [payRequestSchedule, setPayRequestSchedule] = useState("");
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [advancedPayRequestTime, setAdvancedPayRequestTime] = useState("");

  // certification of expenses
  const [expenses, setExpenses] = useState([]);
  const [expenseAmounts, setExpenseAmounts] = useState([]);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [expenseExplanation, setExpenseExplanation] = useState("");

  //justification for more than 12 months payback
  const [numberOfDependents, setNumberOfDependents] = useState(0);
  const [financialSituationSpecifics, setFinancialSituationSpecifics] =
    useState("");

  //remarks
  const [remarks, setRemarks] = useState("");
  const advancePayInfo = {
    payRequestType,
    specificAmount,
    payRequestSchedule,
    advancedPayRequestTime,
    expenses,
    expenseAmounts,
    expenseTotal,
    expenseExplanation,
    numberOfDependents,
    financialSituationSpecifics,
    numberOfMonths,
    remarks,
    setRemarks,
    setNumberOfMonths,
    setPayRequestType,
    setSpecificAmount,
    setPayRequestSchedule,
    setAdvancedPayRequestTime,
    setExpenses,
    setExpenseAmounts,
    setExpenseTotal,
    setExpenseExplanation,
    setNumberOfDependents,
    setFinancialSituationSpecifics,
  };
  return advancePayInfo;
};
