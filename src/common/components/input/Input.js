// components
import BoxValidation from "./components/boxValidation";
import MsgError from "./components/msgError";

// defines
import { DONE, INIT } from "../../../pages/Registration/Registration.defines";

// styles
import "./Input.scss";

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
    <div className="input-container">
      <label for={forLabel}>{label}</label>
      <div className="input-container-validation" >
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
