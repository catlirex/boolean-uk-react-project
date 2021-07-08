import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import useAcStore from "../acStore";
import { postUser } from "../consistent";
import useStore from "../store";
import isValid from "uk-postcode-validator";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function NewUser({ className }) {
  const closeModal = useStore((store) => store.closeModal);
  const classes = useStyles();
  const history = useHistory();
  const newRegUserSetLogin = useAcStore((state) => state.newRegUserSetLogin);
  const [postCodeIsValid, setPostCodeIsValid] = useState(true);

  function handleOnChange(e) {
    setPostCodeIsValid(
      isValid(e.target.value.split(" ").join("").toUpperCase())
    );
  }

  function signUp(e) {
    e.preventDefault();
    let newUser = {
      id: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value,
      history: [],
      "saved-journey": [],
    };

    if (e.target.home.value && postCodeIsValid)
      newUser["saved-place"] = { home: e.target.home.value };
    else if (e.target.home.value && !postCodeIsValid)
      return alert("PostCode incorrect");
    else newUser["saved-place"] = {};

    postUser(newUser).then((dataFromServer) => {
      if (!dataFromServer || dataFromServer.id !== newUser.id) return;
      newRegUserSetLogin(dataFromServer);
      closeModal();
      history.push(`/logged-in/${dataFromServer.id}`);
    });
  }

  return (
    <div className={className}>
      <form
        className={classes.root}
        onSubmit={(e) => {
          signUp(e);
        }}
      >
        <h2>(: Welcome to London :)</h2>
        <h3>Create an account and plan your journey easier</h3>
        <TextField
          name="username"
          id="username"
          label="Username"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          error={false}
          required
        />

        <TextField
          type="password"
          name="password"
          id="password"
          label="Password"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          required
        />
        <TextField
          name="name"
          id="name"
          label="Name"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          required
        />
        <TextField
          name="home"
          id="home"
          label="Home Postcode"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          error={!postCodeIsValid}
          helperText=" Example: SE17PB"
          onChange={(e) => handleOnChange(e)}
        />

        <Button variant="contained" color="primary" type="submit">
          Create New User
        </Button>
      </form>
    </div>
  );
}

export default styled(NewUser)`
  form {
    display: grid;
    grid-gap: 10px;
    place-items: center;
  `;
