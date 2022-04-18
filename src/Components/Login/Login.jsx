import React, { useState } from "react";
import { Wrapper, Content } from "./Login.styles";

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //to be replaced with users from be psql db when Heroku hosting is fixed
  const database = [
    { username: "butter_bridge", password: "pass1" },
    { username: "icellusedkars", password: "pass2" },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: pass, message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: "errors.uname" });
    }
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  );

  return (
    <Wrapper>
      <div>Sign in</div>
      <Content>
        <div>
          {isSubmitted ? <div>User successfully logged in</div> : renderForm}
        </div>
      </Content>
    </Wrapper>
  );
}
