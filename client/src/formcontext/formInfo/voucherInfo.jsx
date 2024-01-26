import { useState } from "react";

export const useVoucherInfo = () => {
  //needs name and date from user profile

  /* travel fields
  date of departure
  date of arrival
  travel starting location
  travel ending location
  travel stops
  travel method
  reason for stop
  lodging cost
  POC miles
  */

  /* reimbursement fields
  date of expense
  nature of expense
  amount of expense
  allowed expense
  */

  /* meal fields 
  date of meal
  number of meals
  date of meal 2?
  number of meals 2?
  */

  //remarks

  const [travelVoucher, setTravelVoucher] = useState([]);

  const [reimbursableExpense, setReimbursableExpense] = useState([]);

  const [deductableMeals, setDeductableMeals] = useState([]);

  const [remarks, setRemarks] = useState("");
  const voucherInfo = {
    travelVoucher,
    reimbursableExpense,
    deductableMeals,
    remarks,
    setRemarks,
    setReimbursableExpense,
    setDeductableMeals,
    setTravelVoucher,
  };
  return voucherInfo;
};
