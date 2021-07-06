import styled from "styled-components";
import InitialMap from "../MapComponent/InitialMap";
import { Main } from "../Component/StyledMain";
import useStore from "../store";

const ActionAside = styled.aside`
  height: 80vh;
  display: grid;
  grid-template-rows: 100px auto auto 1fr;
`;

function splitDurationToNumberArray(duration) {
  let numArray = duration.split(":");
  return numArray.map((target) => Number(target));
}

export default function MainPage() {
  const setModal = useStore((state) => state.setModal);

  return (
    <Main>
      <ActionAside>
        <div>
          <h3>Get me to somewhere</h3>
          <button onClick={() => setModal("newSearch")}>
            New Search using Postcode
          </button>
          <p>Show you all results of London Tube and Bus</p>
        </div>

        <div>
          <h3>Saved Location</h3>
          <button>Home</button>
          <button>Office</button>
          <button>School</button>
          <button>+ New Address</button>
        </div>

        <div>
          <h3>Saved Journey</h3>
          <ul>
            <li>Wembley Stadium - Soho</li>
          </ul>
        </div>

        <div>
          <h3>Searched History</h3>
          <ul>
            <li>Mayfair - London Eye</li>
            <li>Camden market - White City</li>
            <li>Wembley Stadium - Soho</li>
          </ul>
        </div>
      </ActionAside>
      <InitialMap />
    </Main>
  );
}
