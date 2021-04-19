import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import validator from "validator";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setFunFactError(false);

    // set as default false
    [nameError, emailError, funFactError] = [false, false, false];

    // validate
    if (name.length === 0) {
      nameError = true;
      setNameError(true);
    }

    if (!email.length || !validator.isEmail(email)) {
      emailError = true;
      setEmailError(true);
    }

    if (!funFact.length) {
      funFactError = true;
      setFunFactError(true);
    }

    if (!nameError && !emailError && !funFactError) {
      axios.get("https://hack-tech-app-endpoint.herokuapp.com/").then((res) => {
        console.log(res.data);
        alert(res.data);
      });
      setName('');
      setEmail('');
      setFunFact('');
      alert('Submission Received! :)')
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleFunFactChange(e) {
    setFunFact(e.target.value);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [funFact, setFunFact] = useState("");
  var [nameError, emailError, funFactError] = [false, false, false];
  const [nameFlag, setNameError] = useState(false);
  const [emailFlag, setEmailError] = useState(false);
  const [funFactFlag, setFunFactError] = useState(false);

  return (
    <div>
      <form class="flex-form" onSubmit={handleSubmit}>
        <h3>Hack UCI Application</h3>
        <TextField
          style={{ width: "12rem" }}
          InputLabelProps={{ shrink: true }}
          label={"Name"}
          onChange={handleNameChange}
          value={name}
          error={nameFlag}
          helperText={"required!"}
        ></TextField>
        <TextField
          style={{ width: "12rem" }}
          InputLabelProps={{ shrink: true }}
          label={"Email"}
          onChange={handleEmailChange}
          value={email}
          error={emailFlag}
          helperText={"required!"}
        ></TextField>
        <TextField
          style={{ width: "12rem" }}
          InputLabelProps={{ shrink: true }}
          label={"FunFact"}
          onChange={handleFunFactChange}
          value={funFact}
          multiline={true}
          error={funFactFlag}
          helperText={"required!"}
        ></TextField>
        <Button
          borderRadius="5rem"
          className="submit-btn"
          style={{ background: "#ff7b5c" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export default Form;
