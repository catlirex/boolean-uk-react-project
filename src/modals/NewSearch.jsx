import useStore from "../store";
import { useState } from "react";
import isValid from "uk-postcode-validator";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useAcStore from "../acStore";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function NewSearch({ className }) {
  const classes = useStyles();
  const [fromPostCode, setFromPostCode] = useState(" ");
  const [fromPostCodeIsValid, setFromPostCodeIsValid] = useState(true);
  const [toPostCode, setToPostCode] = useState(" ");
  const [toPostCodeIsValid, setToPostCodeIsValid] = useState(true);
  const closeModal = useStore((store) => store.closeModal);
  const getSearchResult = useStore((state) => state.getSearchResult);
  const history = useHistory();
  const clearSearchResult = useStore((state) => state.clearSearchResult);
  const updateSearchValue = useStore((state) => state.updateSearchValue);
  const setViewHistory = useStore((state) => state.setViewHistory);
  const selectedBookmarkPostcode = useAcStore(
    (state) => state.selectedBookmarkPostcode
  );

  useEffect(() => {
    setFromPostCode(selectedBookmarkPostcode);
  }, [selectedBookmarkPostcode]);

  function handleOnChange(e) {
    if (e.target.name === "from") {
      setFromPostCode(e.target.value.toUpperCase());
      setFromPostCodeIsValid(
        isValid(e.target.value.split(" ").join("").toUpperCase())
      );
    } else {
      setToPostCode(e.target.value.toUpperCase());
      setToPostCodeIsValid(
        isValid(e.target.value.split(" ").join("").toUpperCase())
      );
    }
  }

  function handleSubmit(e, fromPostCode, toPostCode) {
    e.preventDefault();
    clearSearchResult();
    setViewHistory(false);
    updateSearchValue(
      fromPostCode.split(" ").join(""),
      toPostCode.split(" ").join("")
    );
    getSearchResult(
      fromPostCode.split(" ").join(""),
      toPostCode.split(" ").join("")
    );
    closeModal();
    history.push(
      `/search/from-${fromPostCode.split(" ").join("")}-to-${toPostCode
        .split(" ")
        .join("")}`
    );
  }

  return (
    <div className={className}>
      <form
        className={classes.root}
        onSubmit={(e) => handleSubmit(e, fromPostCode, toPostCode)}
      >
        <h2>New Search</h2>
        <TextField
          name="from"
          id="from"
          label="Starting Postcode"
          autoComplete="off"
          value={fromPostCode}
          helperText={
            !fromPostCodeIsValid
              ? "Incorrect Input, sample: SE17PB"
              : "Example: SE17PB"
          }
          variant="outlined"
          onChange={(e) => handleOnChange(e)}
          error={!fromPostCodeIsValid}
        />

        <TextField
          name="to"
          id="to"
          label="Destination Postcode"
          autoComplete="off"
          defaultValue={toPostCode}
          helperText={
            !toPostCodeIsValid
              ? "Incorrect Input, sample: SE17PB"
              : "Example: SE17PB"
          }
          variant="outlined"
          onChange={(e) => handleOnChange(e)}
          error={!toPostCodeIsValid}
        />
        <Button variant="contained" color="primary" type="submit">
          Go now
        </Button>
      </form>
    </div>
  );
}

export default styled(NewSearch)`
  form {
    display: grid;
    grid-gap: 10px;
  }
`;
