import { useEffect, useState } from "react";
import "./Register.css";

const Register = () => {
  const [emailData, setEmailData] = useState([]);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorTaken, setEmailErrorTaken] = useState(false);

  const [pass1, setPass1] = useState("");
  const [pass1Error, setPass1Error] = useState(false);
  const [pass1ErrorArr, setPass1ErrorArr] = useState({
    length: false,
    lowerCase: false,
    upperCase: false,
    digit: false,
    specChar: false,
  });

  const [pass2, setPass2] = useState("");
  const [pass2Error, setPass2Error] = useState(false);

  const getEmails = async () => {
    await fetch("/emails.json")
      .then((res) => res.json())
      .then((data) => setEmailData(data.emails));
  };

  useEffect(() => {
    getEmails();
  }, []);

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );

  const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const pass1Handler = (e) => {
    setPass1(e.target.value);
  };

  const pass2Handler = (e) => {
    setPass2(e.target.value);
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);

      if (emailData.some((e) => e.email === email)) {
        setEmailErrorTaken(true);
        return;
      }
      setEmailErrorTaken(false);
    }
  };

  const validatePass1 = () => {
    if (!passwordRegex.test(pass1)) {
      setPass1Error(true);

      // is minimum 8
      if (pass1.length < 8) {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, length: true };
        });
      } else {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, length: false };
        });
      }

      // has lowercase letter
      if (pass1.search(/[a-z]/) < 0) {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, lowerCase: true };
        });
      } else {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, lowerCase: false };
        });
      }

      // has uppercase letter
      if (pass1.search(/[A-Z]/) < 0) {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, upperCase: true };
        });
      } else {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, upperCase: false };
        });
      }

      // has a digit
      if (pass1.search(/[0-9]/) < 0) {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, digit: true };
        });
      } else {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, digit: false };
        });
      }

      // has special character
      if (pass1.search(/[@$!%*?&]/) < 0) {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, specChar: true };
        });
      } else {
        setPass1ErrorArr((prevState) => {
          return { ...prevState, specChar: false };
        });
      }
    } else {
      setPass1Error(false);
    }
  };

  const validatePass2 = () => {
    if (pass2 !== "" && pass1 === pass2) {
      setPass2Error(false);
    } else {
      setPass2Error(true);
    }
  };

  let formValid = false;

  if (!emailError && !pass1Error && !pass2Error) {
    formValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    validateEmail();
    validatePass1();
    validatePass2();

    if (!formValid || pass1 === "" || pass2 === "" || email === "") {
      console.log("invalid form");
      return;
    }

    console.log("form submitted");
    console.log("it is working", email, pass1, pass2);

    setEmail("");
    setPass1("");
    setPass2("");
  };

  // console.log(emailData);

  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={emailHandler}
        onBlur={validateEmail}
        value={email}
      />
      {emailError && <p className="passErr">Email is incorrect</p>}
      {emailErrorTaken && <p className="passErr">Email registered already</p>}

      <label htmlFor="pass1">Password 1</label>
      <input
        id="pass1"
        name="pass1"
        type="text"
        onChange={pass1Handler}
        onBlur={validatePass1}
        value={pass1}
        disabled={emailErrorTaken}
      />
      {pass1Error && [
        <p
          className="passErr"
          key="1"
          style={{ color: pass1ErrorArr.length ? "darkred" : "green" }}
        >
          {pass1ErrorArr.length
            ? "X - password too short"
            : "V - password long enough"}{" "}
        </p>,
        <p
          className="passErr"
          key="2"
          style={{ color: pass1ErrorArr.lowerCase ? "darkred" : "green" }}
        >
          {pass1ErrorArr.lowerCase
            ? "X - 1 lowercase letter required"
            : "V - 1 lowercase letter present"}
        </p>,
        <p
          className="passErr"
          key="3"
          style={{ color: pass1ErrorArr.upperCase ? "darkred" : "green" }}
        >
          {pass1ErrorArr.upperCase
            ? "X - 1 uppercase letter required"
            : "V - 1 uppercase letter present"}
        </p>,
        <p
          className="passErr"
          key="4"
          style={{ color: pass1ErrorArr.digit ? "darkred" : "green" }}
        >
          {pass1ErrorArr.digit ? "X - 1 digit required" : "V - 1 digit present"}
        </p>,
        <p
          className="passErr"
          key="5"
          style={{ color: pass1ErrorArr.specChar ? "darkred" : "green" }}
        >
          {pass1ErrorArr.specChar
            ? "X - 1 special character required"
            : "V - 1 special character present"}
        </p>,
      ]}

      <label htmlFor="pass2">Password 2</label>
      <input
        id="pass2"
        name="pass2"
        type="text"
        onChange={pass2Handler}
        onBlur={validatePass2}
        value={pass2}
        disabled={emailErrorTaken}
      />
      {pass2Error && <p className="passErr">Passwords do not match</p>}

      <input type="submit" />
    </form>
  );
};

export default Register;
