import { useState } from "react";

export const usePayrollInfo = () => {
  // Payroll Fields
  const [accountType, setAccountType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [checkDigit, setCheckDigit] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [bankName, setBankName] = useState("");

  // Allotment Fields
  const [allotmentType, setAllotmentType] = useState("");
  const [allotteeAccountType, setAllotteeAccountType] = useState("");
  const [allotmentAction, setAllotmentAction] = useState("");
  const [allotmentAmount, setAllotmentAmount] = useState("");
  const [allotmentNewTotal, setAllotmentNewTotal] = useState("");
  const [allotteeName, setAllotteeName] = useState("");
  const [allotteeRoutingNumber, setAllotteeRoutingNumber] = useState("");
  const [allotteeAccountNumber, setAllotteeAccountNumber] = useState("");
  const [allotteeCheckDigit, setAllotteeCheckDigit] = useState("");
  const [allotteeTitle, setAllotteeTitle] = useState("");
  const [allotteeBankName, setAllotteeBankName] = useState("");

  const payrollFields = {
    accountType,
    accountTitle,
    paymentType,
    routingNumber,
    accountNumber,
    checkDigit,
    bankName,
    allotmentType,
    allotmentAction,
    allotmentAmount,
    allotmentNewTotal,
    allotteeName,
    allotteeAccountType,
    allotteeRoutingNumber,
    allotteeAccountNumber,
    allotteeCheckDigit,
    allotteeTitle,
    allotteeBankName,
    setAccountType,
    setPaymentType,
    setAccountTitle,
    setAllotmentAction,
    setAllotteeAccountType,
    setRoutingNumber,
    setAccountNumber,
    setCheckDigit,
    setBankName,
    setAllotmentType,
    setAllotmentAmount,
    setAllotmentNewTotal,
    setAllotteeName,
    setAllotteeRoutingNumber,
    setAllotteeAccountNumber,
    setAllotteeCheckDigit,
    setAllotteeTitle,
    setAllotteeBankName,
  };
  return payrollFields;
};
