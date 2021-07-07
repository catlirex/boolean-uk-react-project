import styled from "styled-components";
import HeaderAccountBar from "./HeaderAccountBar";

const StyleHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 50px;
`;

export default function Header() {
  return (
    <StyleHeader>
      <h1>London Transport Ease</h1>
      <HeaderAccountBar />
    </StyleHeader>
  );
}
