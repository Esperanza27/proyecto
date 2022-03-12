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

export const checkValidationInputs = (
  v,
  placeholder,
  idLabel,
  setValue,
  rex,
  setError
) => {
  if (v.match(rex) != null) {
    console.log("if");
    setValue(v);
    setError((cs) => {
      const clone = {};
      cs[idLabel].status = DONE;
      cs[idLabel].type = 0;
      return cs;
    });
  } else if (v.match(rex) === null && v.length === 0) {
    console.log("else if");
    setValue(placeholder);
    setError((cs) => {
      return {
        ...cs,
        [idLabel]: {
          status: (cs[idLabel].status = ERROR),
          type: (cs[idLabel].type = 0),
        },
      };
    });
  } else {
    setValue(placeholder);
    setError((cs) => {
      return {
        ...cs,
        [idLabel]: {
          status: (cs[idLabel].status = ERROR),
          type: (cs[idLabel].type = 1),
        },
      };
    });
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
