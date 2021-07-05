import styled from "styled-components";
import InitialMap from "../MapComponent/InitialMap";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default function MainNoLoginPage() {
  return (
    <Main>
      <aside>
        <h3>leftmenu</h3>
      </aside>
      <InitialMap />
    </Main>
  );
}
