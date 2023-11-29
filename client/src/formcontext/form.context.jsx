import { useState, createContext } from "react";

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
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
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [dob, setDob] = useState("");
  const [todaysDate, setTodaysDate] = useState("");

  return (
    <FormContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        middleInitial,
        setMiddleInitial,
        dutyTitle,
        setDutyTitle,
        address1,
        setAddress1,
        address2,
        setAddress2,
        city,
        setCity,
        homeState,
        setHomeState,
        country,
        setCountry,
        zipCode,
        setZipCode,
        dsn,
        setDsn,
        email,
        setEmail,
        cellPhone,
        setCellPhone,
        supervisorName,
        setSupervisorName,
        supervisorEmail,
        setSupervisorEmail,
        supervisorPhone,
        setSupervisorPhone,
        todaysDate,
        setTodaysDate,
        dob,
        setDob,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
