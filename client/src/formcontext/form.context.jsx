import { useState, createContext } from "react";
import { First } from "react-bootstrap/esm/PageItem";
export const FormContext = createContext();

export const UserContext = createContext();

export const FormProvider = ({ children }) => {
  const today = new Date();
  const date =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [dutyTitle, setDutyTitle] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [homeState, setHomeState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dsn, setDsn] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [todaysDate, setTodaysDate] = useState(date);
  const [email, setEmail] = useState("");
  const [cellphone, setCellPhone] = useState("");
  const [dob, setDob] = useState("");
  // Payroll Fields
  const [accountType, setAccountType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [checkDigit, setCheckDigit] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [bankName, setBankName] = useState("");

  // Allotment Fields
  const [allotmentType, setAllotmentType] = useState("");
  const [allotmentAction, setAllotmentAction] = useState("");
  const [allotmentAmount, setAllotmentAmount] = useState("");
  const [allotmentNewTotal, setAllotmentNewTotal] = useState("");
  const [allotteeName, setAllotteeName] = useState("");
  const [allotteeRoutingNumber, setAllotteeRoutingNumber] = useState("");
  const [allotteeAccountNumber, setAllotteeAccountNumber] = useState("");
  const [allotteeCheckDigit, setAllotteeCheckDigit] = useState("");
  const [allotteeTitle, setAllotteeTitle] = useState("");
  const [allotteeBankName, setAllotteeBankName] = useState("");

  const userProfile = {
    firstName,
    lastName,
    middleInitial,
    dutyTitle,
    email,
    cellphone,
    address1,
    address2,
    city,
    homeState,
    dob,
    country,
    zipCode,
    dsn,
    supervisorName,
    supervisorEmail,
    supervisorPhone,
    todaysDate,
    setFirstName,
    setLastName,
    setEmail,
    setCellPhone,
    setMiddleInitial,
    setDob,
    setDutyTitle,
    setAddress1,
    setAddress2,
    setCity,
    setHomeState,
    setCountry,
    setZipCode,
    setDsn,
    setSupervisorName,
    setSupervisorEmail,
    setSupervisorPhone,
    setTodaysDate,
  };

  const payrollFields = {
    accountType,
    accountOwner,
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
    allotteeRoutingNumber,
    allotteeAccountNumber,
    allotteeCheckDigit,
    allotteeTitle,
    allotteeBankName,
    setAccountType,
    setPaymentType,
    setAccountOwner,
    setAllotmentAction,
    setRoutingNumber,
    setAccountNumber,
    setCheckDigit,
    setBankName,
    setAllotmentType,
    setAllotmentAction,
    setAllotmentAmount,
    setAllotmentNewTotal,
    setAllotteeName,
    setAllotteeRoutingNumber,
    setAllotteeAccountNumber,
    setAllotteeCheckDigit,
    setAllotteeTitle,
    setAllotteeBankName,
  };

  return (
    <FormContext.Provider value={{ userProfile, payrollFields }}>
      {children}
    </FormContext.Provider>
  );
};
