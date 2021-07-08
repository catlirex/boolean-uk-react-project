import { Button } from "@material-ui/core";
import useAcStore from "../../acStore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import styled from "styled-components";

const StyledBookmarkDiv = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 5px;
  max-width: 30vw;
  color: #2a2a2a;
  .btn-container {
    gap: 10px;
  }
`;

export default function SavedLocation() {
  const loginUser = useAcStore((state) => state.loginUser);

  if (!loginUser)
    return (
      <StyledBookmarkDiv>
        <h3>Bookmarked Location & Saved Journey</h3>
        <p>Login to view shortcut</p>
        <div className="auto-col btn-container">
          <Button
            variant="contained"
            color="default"
            startIcon={<AccountCircleIcon />}
            onClick={() => setModal("login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="default"
            startIcon={<PersonAddIcon />}
            onClick={() => setModal("newUser")}
          >
            NewUser
          </Button>
        </div>
      </StyledBookmarkDiv>
    );
}
