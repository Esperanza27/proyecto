// style
import "./MsgError.css";

const MsgError = ({ statusErrMsg }) => {
  return (
    <div className="msg-error-container">
      <a className="msg-error-container-modal"></a>
      <p className="msg-error-container-button">
        {statusErrMsg === 0
          ? "Il campo è REQUIRED"
          : "Hai inserito dei caratteri non consentiti"}
      </p>
    </div>
  );
};

export default MsgError;
