import { useState, useCallback } from "react";

// defines
import d from "../../common/defines";
import {
  FNAME_LABEL,
  LNAME_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
  PASSWORD_LABEL,
  CONFIRM_PASSWORD_LABEL,
  INPUT_TEXT,
  INPUT_NUMBER,
  FNAME_PLACEHOLDER,
  LNAME_PLACEHOLDER,
  PHONE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  CONFIRM_PASSWORD_PLACEHOLDER,
  INIT,
  INPUT_PASSWORD,
} from "./Registration.defines";
// components
import Input from "../../common/components/input";
import Select from "../../common/components/select";
import Accordion from "../../common/components/accordion/Accordion";
// style
import "./Registration.scss";

// utils
import {
  checkValidationInputs,
  checkValidationButton,
} from "./utils/validations";

// pasta
import PiattoDiPasta from "../../common/utils/PiattoDiPasta";

const Registration = () => {
  PiattoDiPasta();

  // input
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //error
  const [error, setError] = useState({
    [FNAME_LABEL]: { status: INIT, type: 0 },
    [LNAME_LABEL]: { status: INIT, type: 0 },
    [PHONE_LABEL]: { status: INIT, type: 0 },
    [EMAIL_LABEL]: { status: INIT, type: 0 },
    [PASSWORD_LABEL]: { status: INIT, type: 0 },
    [CONFIRM_PASSWORD_LABEL]: { status: INIT, type: 0 },
  });

  const setFirstName = useCallback((v) => {
    checkValidationInputs(
      v,
      FNAME_PLACEHOLDER,
      FNAME_LABEL,
      setFName,
      d.TEXT_VALIDATION_REX,
      setError
    );
  }, []);

  const setLastName = useCallback((v) => {
    checkValidationInputs(
      v,
      LNAME_PLACEHOLDER,
      LNAME_LABEL,
      setLName,
      d.TEXT_VALIDATION_REX,
      setError
    );
  }, []);

  const setTelephone = useCallback((v) => {
    checkValidationInputs(
      v,
      PHONE_PLACEHOLDER,
      PHONE_LABEL,
      setPhone,
      d.TELEPHONE_VALIDATION_REX,
      setError
    );
  }, []);

  const setEmail = useCallback((v) => {
    checkValidationInputs(
      v,
      EMAIL_PLACEHOLDER,
      EMAIL_LABEL,
      setEMail,
      d.EMAIL_VALIDATION_REX,
      setError
    );
  }, []);

  const setPsw = useCallback((v) => {
    checkValidationInputs(
      v,
      PASSWORD_PLACEHOLDER,
      PASSWORD_LABEL,
      setPassword,
      d.PASSWORD_VALIDATION_REX,
      setError
    );
  }, []);

  const setConfirmPsw = useCallback((v) => {
    checkValidationInputs(
      v,
      CONFIRM_PASSWORD_PLACEHOLDER,
      CONFIRM_PASSWORD_LABEL,
      setConfirmPassword,
      d.PASSWORD_VALIDATION_REX,
      setError
    );
  }, []);

  const sub = (e) => {
    console.log(fName);
    console.log(lName);
    console.log(phone);
    console.log(eMail);
    e.preventDefault();
  };

  return (
    <div className="registration-container">
      <form>
        {/* name */}
        <Input
          placeholder={FNAME_PLACEHOLDER}
          label={"First name"}
          inputType={INPUT_TEXT}
          forLabel={FNAME_LABEL}
          idLabel={FNAME_LABEL}
          error={error}
          onChange={(v) => setFirstName(v)}
        />

        {/* surname */}
        <Input
          placeholder={LNAME_PLACEHOLDER}
          label={"Last name"}
          inputType={INPUT_TEXT}
          forLabel={LNAME_LABEL}
          idLabel={LNAME_LABEL}
          error={error}
          onChange={(v) => setLastName(v)}
        />
        {/* city list */}
        <Select list={cityData} label={"City"} />

        {/* number*/}
        <Input
          placeholder={PHONE_PLACEHOLDER}
          label={"Telephone"}
          inputType={INPUT_NUMBER}
          forLabel={PHONE_LABEL}
          idLabel={PHONE_LABEL}
          error={error}
          onChange={(v) => setTelephone(v)}
        />
        {/* email */}
        <Input
          placeholder={EMAIL_PLACEHOLDER}
          label={"Email"}
          inputType={INPUT_TEXT}
          forLabel={EMAIL_LABEL}
          idLabel={EMAIL_LABEL}
          error={error}
          onChange={(v) => setEmail(v)}
        />
        {/* password */}
        <Input
          placeholder={PASSWORD_PLACEHOLDER}
          label={"Password"}
          inputType={INPUT_PASSWORD}
          forLabel={PASSWORD_LABEL}
          idLabel={PASSWORD_LABEL}
          error={error}
          onChange={(v) => setPsw(v)}
        />
        {/* confirm password */}
        <Input
          placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
          label={"Confirm Password"}
          inputType={INPUT_PASSWORD}
          forLabel={CONFIRM_PASSWORD_LABEL}
          idLabel={CONFIRM_PASSWORD_LABEL}
          error={error}
          onChange={(v) => setConfirmPsw(v)}
        />
        {/* ACCORDION */}
        <Accordion />
        <div className="registration-submit">
          <input
            className={`registration-input ${
              !checkValidationButton(
                error,
                fName,
                lName,
                phone,
                eMail,
                password,
                confirmPassword
              )
                ? "registration-input-disabled"
                : ""
            }`}
            type="submit"
            value="Submit"
            onClick={(e) => sub(e)}
            disabled={
              !checkValidationButton(
                error,
                fName,
                lName,
                phone,
                eMail,
                password,
                confirmPassword
              )
            }
          />
        </div>
      </form>
    </div>
  );
};
export default Registration;

const cityData = [
  { label: "Roma", value: "roma" },
  { label: "Milano", value: "milano" },
  { label: "Napoli", value: "napoli" },
];
