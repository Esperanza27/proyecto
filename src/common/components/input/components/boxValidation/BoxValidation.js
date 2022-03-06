// style
import "./BoxValidation.css";

// defines
import { DONE } from "../../../../../pages/Registration/Registration.defines";
// assets
import doneIcon from "../../../../../assets/generic_check_icon.png";
import errorIcon from "../../../../../assets/generic_error_icon.png";

const BoxValidation = ({ status }) => {
  return (
    <div className={`box ${status === DONE ? "done" : "error"}`}>
       <img className="check-icon" src={status === DONE ? doneIcon : errorIcon } alt= ""/>
    </div>
  );
};

export default BoxValidation;
