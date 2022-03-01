import { useState, useCallback } from "react";

// defines
import d from "../../common/defines";
import {
  FNAME_LABEL,
  LNAME_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
  INPUT_TEXT,
  INPUT_NUMBER,
  FNAME_PLACEHOLDER,
  LNAME_PLACEHOLDER,
  PHONE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  DONE,
  INIT,
  ERROR,
} from "./Registration.defines";
// components
import Input from "../../common/components/input";

// style
import "./Registration.css";

// utils
import {
  checkValidationInputs,
  checkValidationButton,
} from "./utils/validations";

const Registration = () => {
  // input
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEMail] = useState("");

  //error
  const [error, setError] = useState({
    [FNAME_LABEL]: { status: INIT, type: 0 },
    [LNAME_LABEL]: { status: INIT, type: 0 },
    [PHONE_LABEL]: { status: INIT, type: 0 },
    [EMAIL_LABEL]: { status: INIT, type: 0 },
  });

  console.log(error);

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

  const sub = (e) => {
    console.log(fName);
    console.log(lName);
    console.log(phone);
    console.log(eMail);
    e.preventDefault();
  };

  return (
    <div className="registration-area">
      <form action="/action_page.php">
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
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => sub(e)}
          disabled={!checkValidationButton(error, fName, lName, phone, eMail)}
        />
      </form>
    </div>
  );
};
export default Registration;
