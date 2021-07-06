import styled from "styled-components";

const StyleHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 50px;
`;

const AccountActionBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 10px;
`;

export default function Header() {
  return (
    <StyleHeader>
      <h1>London Transport Ease</h1>
      <AccountActionBar>
        <h2>Catherine</h2>
        <button>Switch User</button>
        <button>Logout</button>
        <button>Login</button>
        <button>NewUser</button>
      </AccountActionBar>
    </StyleHeader>
  );
}
