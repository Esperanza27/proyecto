// style
import "./MsgError.css";

const MsgError = ({ statusErrMsg }) => {
  return (
    <div>
      <p>
        {statusErrMsg === 0
          ? "Il campo è REQUIRED"
          : "Hai inserito dei caratteri non consentiti"}
      </p>
    </div>
  );
};

export default MsgError;
