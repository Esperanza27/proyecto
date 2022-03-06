// style
import "./MsgError.css";

const MsgError = ({ statusErrMsg, typeErrMsg }) => {
  return (
    <div className="msg-error-container">
      {
        statusErrMsg ?
          <h5 className="msg-error">
            {typeErrMsg === 0
              ? "Il campo è REQUIRED"
              : "Hai inserito dei caratteri non consentiti"}
          </h5> : null
      }
    </div>
  );
};

export default MsgError;
