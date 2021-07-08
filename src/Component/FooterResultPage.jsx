import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components";
import useStore from "../store";
import useAcStore from "../acStore";

const StyledNav = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

export default function FooterResultPage() {
  const setModal = useStore((state) => state.setModal);
  const history = useHistory();
  const loginUser = useAcStore((state) => state.loginUser);
  const searchResult = useStore((state) => state.searchResult);
  const searchValue = useStore((state) => state.searchValue);
  const updateJourney = useAcStore((state) => state.updateJourney);

  function handleOnClick() {
    let newJourney = {
      from: searchResult[0].route_parts[0].from_point_name,
      to: searchResult[0].route_parts[searchResult[0].route_parts.length - 1]
        .to_point_name,
      fromPostcode: searchValue.fromPostcode,
      toPostcode: searchValue.toPostcode,
    };

    let allJourney = [newJourney, ...loginUser["saved-journey"]];

    updateJourney(allJourney);
  }

  return (
    <StyledNav>
      <Button variant="contained" onClick={() => history.push("/")}>
        <HomeIcon />
      </Button>

      <Button variant="contained" onClick={() => setModal("newSearch")}>
        New Search
      </Button>
      <Button
        variant="contained"
        disabled={loginUser ? false : true}
        onClick={() => handleOnClick()}
      >
        Save Journey
      </Button>
    </StyledNav>
  );
}
