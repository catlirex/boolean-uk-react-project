import { Main } from "../Component/StyledMain";
import styled from "styled-components";
import JourneyDetailMap from "../MapComponent/JourneyDetailMap";

const JourneyAside = styled.aside`
  height: 80vh;
  display: grid;
  grid-template-rows: 100px 1fr;
`;

export default function JourneyDetailPage() {
  return (
    <Main>
      <JourneyAside>
        <div>
          <p>departure_time": "14:57"</p>
          <p>"arrival_time": "15:41"</p>
          <p>"duration": "00:44:00"</p>
        </div>
        <section>
          <h2>RoutePart</h2>
          <ul>
            <li>
              <span>"mode": "foot"</span>
              <span>"duration": "00:09:00",</span>
              <p>
                "from_point_name": "1 Mayfair Place","to_point_name": "Green
                Park"
              </p>
            </li>
            <li>
              <span>"mode": "tube"</span>
              <span>"duration": "00:09:00",</span>
              <p>
                "from_point_name": "Green Park","to_point_name": "Finchley
                Road",
              </p>
              <p>"line_name": "Jubilee", "destination": "Stanmore",</p>
            </li>
          </ul>
        </section>
      </JourneyAside>
      <JourneyDetailMap />
    </Main>
  );
}
