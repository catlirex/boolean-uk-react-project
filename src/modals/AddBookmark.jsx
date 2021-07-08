import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { useState } from "react";
import isValid from "uk-postcode-validator";
import useAcStore from "../acStore";
import useStore from "../store";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddBookmark({ className }) {
  const classes = useStyles();
  const closeModal = useStore((store) => store.closeModal);
  const [postCodeInput, setPostCodeInput] = useState(" ");
  const [postCodeInputIsValid, setPostCodeInputIsValid] = useState(true);
  const loginUser = useAcStore((state) => state.loginUser);
  const addSavePlace = useAcStore((state) => state.addSavePlace);

  function handleOnChange(e) {
    setPostCodeInput(e.target.value.toUpperCase());
    setPostCodeInputIsValid(
      isValid(e.target.value.split(" ").join("").toUpperCase())
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    let updatedObj = { ...loginUser["saved-place"] };
    updatedObj[e.target.name.value] = postCodeInput;
    addSavePlace(updatedObj);
    closeModal();
  }
  return (
    <div className={className}>
      <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
        <h2>+ Bookmark Postcode</h2>
        <TextField
          name="name"
          id="name"
          label="Location"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          helperText="e.g. Home / Office / School"
          required
        />
        <TextField
          name="postcode"
          id="Postcode"
          label="Postcode"
          autoComplete="off"
          defaultValue=""
          variant="outlined"
          helperText={
            !postCodeInputIsValid
              ? "Incorrect Input, sample: SE17PB"
              : "Example: SE17PB"
          }
          onChange={(e) => handleOnChange(e)}
          error={!postCodeInputIsValid}
          required
        />

        <Button variant="contained" color="primary" type="submit">
          Saved
        </Button>
      </form>
    </div>
  );
}

export default styled(AddBookmark)`
  form {
    display: grid;
    grid-gap: 10px;
    place-items: center;
  }
`;
