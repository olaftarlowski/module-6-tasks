import { useEffect, useState } from "react";
import "./Register.css";

const Register = () => {
  const [emailData, setEmailData] = useState([]);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorTaken, setEmailErrorTaken] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorArr, setPasswordErrorArr] = useState({
    length: false,
    lowerCase: false,
    upperCase: false,
    digit: false,
    specChar: false,
  });

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

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

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
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

  const validatepassword = () => {
    if (!passwordRegex.test(password)) {
      setPasswordError(true);

      // is minimum 8
      if (password.length < 8) {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, length: true };
        });
      } else {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, length: false };
        });
      }

      // has lowercase letter
      if (password.search(/[a-z]/) < 0) {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, lowerCase: true };
        });
      } else {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, lowerCase: false };
        });
      }

      // has uppercase letter
      if (password.search(/[A-Z]/) < 0) {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, upperCase: true };
        });
      } else {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, upperCase: false };
        });
      }

      // has a digit
      if (password.search(/[0-9]/) < 0) {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, digit: true };
        });
      } else {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, digit: false };
        });
      }

      // has special character
      if (password.search(/[@$!%*?&]/) < 0) {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, specChar: true };
        });
      } else {
        setPasswordErrorArr((prevState) => {
          return { ...prevState, specChar: false };
        });
      }
    } else {
      setPasswordError(false);
    }
  };

  const validatepasswordConfirm = () => {
    if (passwordConfirm !== "" && password === passwordConfirm) {
      setPasswordConfirmError(false);
    } else {
      setPasswordConfirmError(true);
    }
  };

  let formValid = false;

  if (!emailError && !passwordError && !passwordConfirmError) {
    formValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    validateEmail();
    validatepassword();
    validatepasswordConfirm();

    if (
      !formValid ||
      password === "" ||
      passwordConfirm === "" ||
      email === ""
    ) {
      console.log("invalid form");
      return;
    }

    console.log("form submitted");
    console.log("it is working", email, password, passwordConfirm);

    setEmail("");
    setPassword("");
    setPasswordConfirm("");
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

      <label htmlFor="password">Password 1</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={passwordHandler}
        onBlur={validatepassword}
        value={password}
        disabled={emailErrorTaken}
      />
      {passwordError && (
        <>
          <p
            className="passErr"
            key="1"
            style={{ color: passwordErrorArr.length ? "darkred" : "green" }}
          >
            {passwordErrorArr.length
              ? "X - password too short"
              : "V - password long enough"}{" "}
          </p>
          <p
            className="passErr"
            key="2"
            style={{ color: passwordErrorArr.lowerCase ? "darkred" : "green" }}
          >
            {passwordErrorArr.lowerCase
              ? "X - 1 lowercase letter required"
              : "V - 1 lowercase letter present"}
          </p>
          <p
            className="passErr"
            key="3"
            style={{ color: passwordErrorArr.upperCase ? "darkred" : "green" }}
          >
            {passwordErrorArr.upperCase
              ? "X - 1 uppercase letter required"
              : "V - 1 uppercase letter present"}
          </p>
          <p
            className="passErr"
            key="4"
            style={{ color: passwordErrorArr.digit ? "darkred" : "green" }}
          >
            {passwordErrorArr.digit
              ? "X - 1 digit required"
              : "V - 1 digit present"}
          </p>
          <p
            className="passErr"
            key="5"
            style={{ color: passwordErrorArr.specChar ? "darkred" : "green" }}
          >
            {passwordErrorArr.specChar
              ? "X - 1 special character required"
              : "V - 1 special character present"}
          </p>
        </>
      )}

      <label htmlFor="passwordConfirm">Password 2</label>
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="text"
        onChange={passwordConfirmHandler}
        onBlur={validatepasswordConfirm}
        value={passwordConfirm}
        disabled={emailErrorTaken}
      />
      {passwordConfirmError && (
        <p className="passErr">Passwords do not match</p>
      )}

      <input type="submit" />
    </form>
  );
};

export default Register;
