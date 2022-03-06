// components
import BoxValidation from "./components/boxValidation";
import MsgError from "./components/msgError";

// defines
import { DONE, INIT } from "../../../pages/Registration/Registration.defines";

// styles
import "./Input.css";

const Input = ({
  placeholder = "",
  label = "",
  inputType = "",
  forLabel = "",
  idLabel = "",
  error = {},
  onChange,
}) => {
  return (
    <div>
      <label for={forLabel}>{label}</label>
      <br />
      <div className="input-container">
        <input
          className="input"
          type={inputType}
          id={idLabel}
          placeholder={placeholder}
          onChange={(v) => onChange(v.target.value)}
        />
        <BoxValidation status={error[idLabel].status} />
      </div>

      <MsgError statusErrMsg={error[idLabel].status !== INIT && error[idLabel].status !== DONE}
                typeErrMsg={error[idLabel].type} />
    </div>
  );
};

export default Input;
