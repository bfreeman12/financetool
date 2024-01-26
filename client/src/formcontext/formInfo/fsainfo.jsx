import { useState } from "react";

export const useFsaInfo = () => {
  //
  //needs name and date from user profile

  //should probably get dod from use profile as well but too bad

  const [branch, setBranch] = useState("");
  const [org, setOrg] = useState("");
  const [fsaType, setFsaType] = useState("");
  const [dateDeparted, setDateDeparted] = useState("");
  const [dependentAddress, setDependentAddress] = useState("");

  //certification boxes
  const [divorced, setDivorced] = useState(false);
  const [legalCustody, setLegalCustody] = useState(false);
  const [dependentMilitary, setDependentMilitary] = useState(false);
  const [institution, setInstitution] = useState(false);
  const [parents, setParents] = useState(false);
  const [marriedToActive, setMarriedToActive] = useState(false);
  const [wasResiding, setWasResiding] = useState(false);
  const [spouseDodId, setSpouseDodId] = useState("");
  const [spouseBranchComponent, setSpouseBranchComponent] = useState("");
  const [lastTdy, setLastTdy] = useState(false);

  //certifying officer completes below
  //fsa-t
  //location 1 -dates to and from -num of days
  const [location1, setLocation1] = useState("");
  const [dateFrom1, setDateFrom1] = useState("");
  //location 2 -dates to and from -num of days
  const [location2, setLocation2] = useState("");
  const [dateFrom2, setDateFrom2] = useState("");
  //location 3 -dates to and from -num of days
  const [location3, setLocation3] = useState("");
  const [dateFrom3, setDateFrom3] = useState("");

  //fsa-r
  const [lastDutyStation, setLastDutyStation] = useState("");
  const [dateDeparted2, setDateDeparted2] = useState("");
  const [leaveInRoute, setLeaveInRoute] = useState("");
  const [proceedTime, setProceedTime] = useState("");
  const [newDutyStation, setNewDutyStation] = useState("");
  const [dateArrived, setDateArrived] = useState("");

  //fsa-s
  const [dateDeparted3, setDateDeparted3] = useState("");
  const [shipName, setShipName] = useState("");
  const [homePort, setHomePort] = useState("");
  const [travelOrders, setTravelOrders] = useState("");
  const [ordersDate, setOrdersDate] = useState("");

  //officer signature
  const [certifyingOfficerName, setCertifyingOfficerName] = useState("");
  const [certifyingOfficeTitle, setCertifyingOfficeTitle] = useState("");
  const [certifyingOfficeOrg, setCertifyingOfficeOrg] = useState("");
  const [certifyingOfficerSignDate, setCertifyingOfficerSignDate] =
    useState("");

  const fsaInfo = {
    branch,
    org,
    fsaType,
    dateDeparted,
    dependentAddress,
    divorced,
    legalCustody,
    dependentMilitary,
    institution,
    parents,
    marriedToActive,
    wasResiding,
    spouseDodId,
    lastTdy,
    location1,
    dateFrom1,
    location2,
    dateFrom2,
    location3,
    dateFrom3,
    lastDutyStation,
    dateDeparted2,
    leaveInRoute,
    proceedTime,
    newDutyStation,
    dateArrived,
    dateDeparted3,
    shipName,
    homePort,
    travelOrders,
    ordersDate,
    certifyingOfficerName,
    certifyingOfficeTitle,
    certifyingOfficeOrg,
    certifyingOfficerSignDate,
    spouseBranchComponent,
    setSpouseBranchComponent,
    setBranch,
    setOrg,
    setFsaType,
    setDateDeparted,
    setDependentAddress,
    setDivorced,
    setLegalCustody,
    setDependentMilitary,
    setInstitution,
    setParents,
    setMarriedToActive,
    setWasResiding,
    setSpouseDodId,
    setLastTdy,
    setLocation1,
    setDateFrom1,
    setLocation2,
    setDateFrom2,
    setLocation3,
    setDateFrom3,
    setLastDutyStation,
    setDateDeparted2,
    setLeaveInRoute,
    setProceedTime,
    setNewDutyStation,
    setDateArrived,
    setDateDeparted3,
    setShipName,
    setHomePort,
    setTravelOrders,
    setOrdersDate,
    setCertifyingOfficerName,
    setCertifyingOfficeTitle,
    setCertifyingOfficeOrg,
    setCertifyingOfficerSignDate,
  };

  return fsaInfo;
};
