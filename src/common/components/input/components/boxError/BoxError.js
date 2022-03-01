// style
import "./BoxError.css";

// defines
import { DONE } from "../../../../../pages/Registration/Registration.defines";

const BoxError = ({ status }) => {
  return <div className={`box ${status === DONE ? "done" : "error"}`} />;
};

export default BoxError;
