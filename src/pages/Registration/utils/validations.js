import {
  FNAME_LABEL,
  LNAME_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
  PASSWORD_LABEL,
  CONFIRM_PASSWORD_LABEL,
  DONE,
  ERROR,
} from "../Registration.defines";

export const checkValidationInputs = (props) => {
  const {
    currentValue,
    placeholder,
    setValue,
    rex,
    setError
  } = props;

  if (currentValue.match(rex) != null) {
    console.log("if");
    setValue(currentValue);
    setError({
      status: DONE,
      type: 0
    });
    /*setError((cs) => {
      cs[label].status = DONE;
      cs[label].type = 0;
      return cs;
    });*/
  } else if (currentValue.match(rex) === null && currentValue.length === 0) {
    console.log("else if");
    setValue(placeholder);
    setError({
      status: ERROR,
      type: 0
    });
    /*setError((cs) => {
      return {
        ...cs,
        [label]: {
          status: (cs[label].status = ERROR),
          type: (cs[label].type = 0),
        },
      };
    });*/
  } else {
    setValue(placeholder);
    setError({
      status: ERROR,
      type: 1
    });
    /*setError((cs) => {
      return {
        ...cs,
        [label]: {
          status: (cs[label].status = ERROR),
          type: (cs[label].type = 1),
        },
      };
    });*/
  }
};

export const checkValidationButton = (
  s,
  fName,
  lName,
  phone,
  eMail,
  password,
  confirmPassword
) => {
  return (
    s[FNAME_LABEL]?.status === DONE &&
    s[LNAME_LABEL]?.status === DONE &&
    s[PHONE_LABEL]?.status === DONE &&
    s[EMAIL_LABEL]?.status === DONE &&
    s[PASSWORD_LABEL]?.status === DONE &&
    s[CONFIRM_PASSWORD_LABEL]?.status === DONE &&
    fName !== "" &&
    lName !== "" &&
    phone !== "" &&
    eMail !== "" &&
    password !== "" &&
    confirmPassword !== ""
  );
};
