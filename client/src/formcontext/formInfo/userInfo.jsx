import { useState } from "react";

export const useUserInfo = (date) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [ssn, setSsn] = useState("");
  const [dutyTitle, setDutyTitle] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [homeState, setHomeState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [todaysDate, setTodaysDate] = useState(date);
  const [email, setEmail] = useState("");
  const [cellphone, setCellPhone] = useState("");
  const [dob, setDob] = useState("");
  const [dodId, setDodId] = useState("");
  const [userBranch, setUserBranch] = useState("");
  const [userGrade, setUserGrade] = useState("");
  const [userRank, setUserRank] = useState("");
  const [userServiceType, setUserServiceType] = useState("");
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
    ssn,
    homeState,
    dob,
    dodId,
    country,
    zipCode,
    workPhone,
    supervisorName,
    supervisorEmail,
    supervisorPhone,
    todaysDate,
    userBranch,
    userGrade,
    userRank,
    userServiceType,
    setUserServiceType,
    setUserRank,
    setUserGrade,
    setUserBranch,
    setFirstName,
    setLastName,
    setEmail,
    setCellPhone,
    setMiddleInitial,
    setDob,
    setSsn,
    setDutyTitle,
    setAddress1,
    setAddress2,
    setCity,
    setDodId,
    setHomeState,
    setCountry,
    setZipCode,
    setWorkPhone,
    setSupervisorName,
    setSupervisorEmail,
    setSupervisorPhone,
    setTodaysDate,
  };

  return userProfile;
};
