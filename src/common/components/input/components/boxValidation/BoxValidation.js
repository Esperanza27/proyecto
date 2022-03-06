// style
import "./BoxValidation.css";

// defines
import { DONE, INIT } from "../../../../../pages/Registration/Registration.defines";
// assets
import doneIcon from "../../../../../assets/generic_check_icon.png";
import errorIcon from "../../../../../assets/generic_error_icon.png";

const BoxValidation = ({ status }) => {
  return (
    <div className="box-validation-container">
      {
        status !== INIT ?
          <img className="box-validation-icon" src={status === DONE ? doneIcon : errorIcon} alt="" />
          : null
      }
    </div>
  );
};

export default BoxValidation;
