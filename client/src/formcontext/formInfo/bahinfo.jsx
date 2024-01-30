import { useState } from "react";

export const useBahInfo = () => {
  //need to ask them if they want to include any other fields such as housing official

  /*
  needs name and date from user profile
  needs dod from user profile
  needs paygrade from user profile
  needs phone from user profile
  needs email address from user profile */

  const [dutyLocation, setDutyLocation] = useState("");
  const [dutyLocationState, setDutyLocationState] = useState("");
  const [dutyLocationZip, setDutyLocationZip] = useState("");
  const [dutyLocationCountry, setDutyLocationCountry] = useState("");

  //members physical address street city state zip code
  const [memberStreet, setMemberStreet] = useState("");
  const [memberCity, setMemberCity] = useState("");
  const [memberState, setMemberState] = useState("");
  const [memberZip, setMemberZip] = useState("");

  //active duty military status
  const [maritalStatus, setMaritalStatus] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spouseDodId, setSpouseDodId] = useState("");
  const [spouseBranch, setSpouseBranch] = useState("");
  const [spouseDutyStation, setSpouseDutyStation] = useState("");
  const [spouseDateOfMarriage, setSpouseDateOfMarriage] = useState("");

  const [divorced, setDivorced] = useState(false);
  const [separated, setSeparated] = useState(false);
  //if divorced or seperated
  const [divorceDate, setDivorceDate] = useState("");
  const [legalSeperationDate, setLegalSeperationDate] = useState("");

  //for non custodial parents
  const [nonCustodialFullAmount, setNonCustodialFullAmount] = useState(false);
  const [nonCustodialPerMonth, setNonCustodialPerMonth] = useState("");
  const [custodyBasedOn, setCustodyBasedOn] = useState(""); // Divorce decree/ court order/ legal separation agreement/written agreement

  //bah dependent information
  const [claimingDependent, setClaimingDependent] = useState(false);
  const [claimEffectiveDate, setClaimEffectiveDate] = useState("");

  //5 slots for dependents
  const [dependents, setDependents] = useState([]);

  //if dependent is child who parent is military
  const [dependentMilitaryName, setDependentMilitaryName] = useState("");
  const [dependentMilitaryDODID, setDependentMilitaryDODID] = useState("");
  const [dependentMilitaryBranch, setDependentMilitaryBranch] = useState("");
  const [dependentMilitaryStation, setDependentMilitaryStation] = useState("");

  //member certification
  const [memberCertification, setMemberCertification] = useState(false);

  //first application certification
  const [firstApplication, setFirstApplication] = useState(false);
  const [firstApplicationDate, setFirstApplicationDate] = useState("");

  //additional information box
  const [additionalInformation, setAdditionalInformation] = useState("");

  const [custodyDate, setCustodyDate] = useState("");

  const bahInfo = {
    dutyLocation,
    dutyLocationState,
    dutyLocationZip,
    dutyLocationCountry,
    memberStreet,
    memberCity,
    memberState,
    memberZip,
    maritalStatus,
    spouseName,
    spouseDodId,
    spouseBranch,
    spouseDutyStation,
    spouseDateOfMarriage,
    divorceDate,
    legalSeperationDate,
    nonCustodialFullAmount,
    nonCustodialPerMonth,
    custodyBasedOn,
    custodyDate,
    setCustodyDate,
    claimingDependent,
    claimEffectiveDate,
    dependentMilitaryName,
    dependentMilitaryDODID,
    dependentMilitaryBranch,
    dependentMilitaryStation,
    memberCertification,
    firstApplication,
    firstApplicationDate,
    additionalInformation,
    dependents,
    divorced,
    separated,
    setDivorced,
    setSeparated,
    setDutyLocation,
    setDutyLocationState,
    setDutyLocationZip,
    setDutyLocationCountry,
    setMemberStreet,
    setMemberCity,
    setMemberState,
    setMemberZip,
    setMaritalStatus,
    setSpouseName,
    setSpouseDodId,
    setSpouseBranch,
    setSpouseDutyStation,
    setSpouseDateOfMarriage,
    setDivorceDate,
    setLegalSeperationDate,
    setNonCustodialFullAmount,
    setNonCustodialPerMonth,
    setCustodyBasedOn,
    setClaimingDependent,
    setClaimEffectiveDate,
    setDependentMilitaryName,
    setDependentMilitaryDODID,
    setDependentMilitaryBranch,
    setDependentMilitaryStation,
    setMemberCertification,
    setFirstApplication,
    setFirstApplicationDate,
    setAdditionalInformation,
    setDependents,
  };

  return bahInfo;
};
