import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components";
import useStore from "../store";

const StyledNav = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

export default function FooterResultPage() {
  const setModal = useStore((state) => state.setModal);
  const history = useHistory();

  return (
    <StyledNav>
      <Button variant="contained" onClick={() => history.push("/")}>
        <HomeIcon />
      </Button>

      <Button variant="contained" onClick={() => setModal("newSearch")}>
        New Search
      </Button>
      <Button variant="contained" disabled>
        Save Journey
      </Button>
    </StyledNav>
  );
}
