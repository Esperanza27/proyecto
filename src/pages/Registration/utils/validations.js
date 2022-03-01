import {
  FNAME_LABEL,
  LNAME_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
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
      cs[idLabel].status = false;
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
          status: (cs[idLabel].status = true),
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
          status: (cs[idLabel].status = true),
          type: (cs[idLabel].type = 1),
        },
      };
    });
  }
};

export const checkValidationButton = (s, fName, lName, phone, eMail) => {
  return (
    !s[FNAME_LABEL]?.status &&
    !s[LNAME_LABEL]?.status &&
    !s[PHONE_LABEL]?.status &&
    !s[EMAIL_LABEL]?.status &&
    fName !== "" &&
    lName !== "" &&
    phone !== "" &&
    eMail !== ""
  );
};
