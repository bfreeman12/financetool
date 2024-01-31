import { createContext, useContext, useCallback } from "react";
import { useUserInfo } from "./formInfo/userInfo";
import { usePayrollInfo } from "./formInfo/payrollInfo";
import { useAdvancePayInfo } from "./formInfo/advancePayInfo";
import { useBahInfo } from "./formInfo/bahinfo";
import { useFsaInfo } from "./formInfo/fsainfo";
import { useLostRecieptInfo } from "./formInfo/lostRecieptInfo";
import { useVoucherInfo } from "./formInfo/voucherInfo";
import { useLegalResidence } from "./formInfo/legalResidence";

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

  const userProfile = useUserInfo(date);
  const payrollFields = usePayrollInfo();
  const advancePayFields = useAdvancePayInfo();
  const bahFields = useBahInfo();
  const fsaFields = useFsaInfo();
  const lostRecieptFields = useLostRecieptInfo();
  const voucherFields = useVoucherInfo();
  const legalResidenceFields = useLegalResidence();
  const resetForm = useCallback(() => {
    userProfile.reset();
    payrollFields.reset();
    advancePayFields.reset();
    bahFields.reset();
    fsaFields.reset();
    lostRecieptFields.reset();
    voucherFields.reset();
    legalResidenceFields.reset();
  }, [
    userProfile,
    payrollFields,
    advancePayFields,
    bahFields,
    fsaFields,
    lostRecieptFields,
    voucherFields,
    legalResidenceFields,
  ]);

  return (
    <FormContext.Provider
      value={{
        userProfile,
        payrollFields,
        advancePayFields,
        bahFields,
        fsaFields,
        lostRecieptFields,
        voucherFields,
        legalResidenceFields,
        resetForm, // add resetForm to the context value
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
