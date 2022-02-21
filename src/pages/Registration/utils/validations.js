export const setNameValidated = (
  v,
  placeholder,
  idLabel,
  setName,
  setStatusErr,
  setStatusErrMsg,
  setStatusErrInput,
  rex
) => {
  if (v.match(rex) != null) {
    setName(v);
    setStatusErr(false)
    setStatusErrInput("")
  } else if (v.match(rex) === null && v.length === 0) {
    setStatusErr(true);
    setStatusErrInput(idLabel);
    setStatusErrMsg(0);
    setName(placeholder);
  } else {
    setStatusErr(true);
    setStatusErrInput(idLabel);
    setStatusErrMsg(1);
  }
};