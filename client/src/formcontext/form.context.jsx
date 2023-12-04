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
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [homeState, setHomeState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dsn, setDsn] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [todaysDate, setTodaysDate] = useState(date);

  const [accountType, setAccountType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [checkDigit, setCheckDigit] = useState("");
  const [bankName, setBankName] = useState("");
  const [allotmentType, setAllotmentType] = useState("");
  const [allotmentAction, setAllotmentAction] = useState("");
  const [allotteeTitle, setAlloteeTitle] = useState("");
  const [allotmentNewTotal, setAllotmentNewTotal] = useState("");
  const [allotmentAmount, setAllotmentAmount] = useState("");
  const [alloteeName, setAlloteeName] = useState("");
  const [alloteeRoutingNumber, setAlloteeRoutingNumber] = useState("");
  const [alloteeAccountNumber, setAlloteeAccountNumber] = useState("");
  const [alloteeCheckDigit, setAlloteeCheckDigit] = useState("");
  const [alloteeBankName, setAlloteeBankName] = useState("");
  const [accountOwner, setAccountOwner] = useState(
    lastName + " " + firstName + " " + middleInitial
  );
  const userProfile = {
    firstName,
    lastName,
    middleInitial,
    dutyTitle,
    address,
    city,
    homeState,
    country,
    zipCode,
    dsn,
    supervisorName,
    supervisorEmail,
    supervisorPhone,
    todaysDate,
    setFirstName,
    setLastName,
    setMiddleInitial,
    setDutyTitle,
    setAddress,
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
    alloteeName,
    allotteeTitle,
    alloteeRoutingNumber,
    alloteeAccountNumber,
    alloteeCheckDigit,
    alloteeBankName,
    setAccountType,
    setPaymentType,
    setAccountOwner,
    setAllotmentAction,
    setRoutingNumber,
    setAccountNumber,
    setCheckDigit,
    setBankName,
    setAlloteeTitle,
    setAllotmentType,
    setAllotmentAccountType,
    setAllotmentNewTotal,
    setAllotmentAmount,
    setAlloteeName,
    setAlloteeRoutingNumber,
    setAlloteeAccountNumber,
    setAlloteeCheckDigit,
    setAlloteeBankName,
  };

  return (
    <FormContext.Provider value={{ userProfile, payrollFields }}>
      {children}
    </FormContext.Provider>
  );
};
