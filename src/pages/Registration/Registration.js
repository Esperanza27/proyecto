import { useState, useCallback } from "react";

// components
import Input from "../../common/components/input";

// style
import "./Registration.css";

// utils
import { setNameValidated } from "./utils/validations";

const Registration = () => {
  const [fname, setFname] = useState("es. pippo");
  const [lname, setLname] = useState("es. llontop");
  const [pNumber, setPNumber] = useState("es. 3347451378");
  const [eMail, setEMail] = useState("es. esllobus_15_27@hotmail.com");

  const [statusErr, setStatusErr] = useState(false);
  const [statusErrInput, setStatusErrInput] = useState("");
  const [statusErrMgs, setStatusErrMsg] = useState(0);

  const setFirstName = useCallback((v) => {
    setNameValidated(
      v,
      "es. esperanza",
      "fName",
      setFname,
      setStatusErr,
      setStatusErrMsg,
      setStatusErrInput,
      /^[a-z]+$/i
    );
  }, []);

  const setLastName = useCallback((v) => {
    setNameValidated(
      v,
      "es. llontop",
      "lname",
      setLname,
      setStatusErr,
      setStatusErrMsg,
      setStatusErrInput,
      /^[a-z]+$/i
    );
  }, []);

  const setTelephone = useCallback((v) => {
    setNameValidated(
      v,
      "es. 3347451378",
      "pNumber",
      setPNumber,
      setStatusErr,
      setStatusErrMsg,
      setStatusErrInput
    );
  }, []);

  const setEmail = useCallback((v) => {
    setNameValidated(
      v,
      "es. esllobus_15_27@hotmail.com",
      "eMail",
      setEMail,
      setStatusErr,
      setStatusErrMsg,
      setStatusErrInput,
      /\w+@\w+\.\w{2,4}/i
    );
  }, []);

  const sub = (e) => {
    console.log(fname);
    console.log(lname);
    console.log(pNumber);
    console.log(eMail);
    e.preventDefault();
  };

  return (
    <form action="/action_page.php">
      {/* name */}
      <Input
        placeholder={fname}
        label={"First name"}
        inputType={"text"}
        forLabel={"fName"}
        idLabel={"fName"}
        statusErr={statusErr && statusErrInput === "fName"}
        statusErrMsg={statusErrMgs}
        onChange={(v) => setFirstName(v)}
      />

      {/* surname */}
      <Input
        placeholder={lname}
        label={"Last name"}
        inputType={"text"}
        forLabel={"lname"}
        idLabel={"lname"}
        statusErr={statusErr && statusErrInput === "lname"}
        statusErrMsg={statusErrMgs}
        onChange={(v) => setLastName(v)}
      />

      {/* number*/}
      <Input
        placeholder={pNumber}
        label={"Telephone"}
        inputType={"number"}
        forLabel={"pNumber"}
        idLabel={"pNumber"}
        statusErr={statusErr && statusErrInput === "pNumber"}
        statusErrMsg={statusErrMgs}
        onChange={(v) => setTelephone(v)}
      />
      {/* email */}
      <Input
        placeholder={eMail}
        label={"Email"}
        inputType={"text"}
        forLabel={"eMail"}
        idLabel={"eMail"}
        statusErr={statusErr && statusErrInput === "eMail"}
        statusErrMsg={statusErrMgs}
        onChange={(v) => setEmail(v)}
      />
      <br />
      <br />
      <input type="submit" value="Submit" onClick={(e) => sub(e)} />
    </form>
  );
};
export default Registration;
// posta... /\w+@\w+\.\w{2,4}/i
