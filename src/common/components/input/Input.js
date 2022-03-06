// components
import { INIT } from "../../../pages/Registration/Registration.defines";
import BoxValidation from "./components/boxValidation";
import MsgError from "./components/msgError";

const Input = ({
  placeholder = "",
  label = "",
  inputType = "",
  forLabel = "",
  idLabel = "",
  error = {},
  onChange,
}) => {
  console.log("input: ", error);
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
        {error[idLabel].status !== INIT && <BoxValidation status={error[idLabel].status}/>}
      </div>

      {error[idLabel].status !== INIT && <MsgError statusErrMsg={error[idLabel].type} />}
    </div>
  );
};

export default Input;
