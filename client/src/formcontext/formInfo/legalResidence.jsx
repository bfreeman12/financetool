import { useState } from "react";

export const useLegalResidence = () => {
  //needs name and date from user profile
  //needs dodid from user profile

  const [legalResidence, setLegalResidence] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");

  const legalResidenceInfo = {
    legalResidence,
    mailingAddress,
    setLegalResidence,
    setMailingAddress,
  };
  return legalResidenceInfo;
};
