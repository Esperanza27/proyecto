// components
import BoxError from "./components/boxError";
import MsgError from "./components/msgError";

const Input = ({
  placeholder = "",
  label = "",
  inputType = "",
  forLabel = "",
  idLabel = "",
  statusErr = false,
  statusErrMsg = 0,
  onChange,
}) => {
  return (
    <div>
      <label for={forLabel}>{label}</label>
      <br />
      <div className="input-box">
        <input
          type={inputType}
          id={idLabel}
          placeholder={placeholder}
          onChange={(v) => onChange(v.target.value)}
        />
        {statusErr && <BoxError />}
      </div>

      {statusErr && <MsgError statusErrMsg={statusErrMsg} />}
    </div>
  );
};

export default Input;
