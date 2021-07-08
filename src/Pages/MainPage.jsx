import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useAcStore from "../acStore";
import SavedLocation from "../Component/MainSideComponent/SavedLocation";
import SearchAside from "../Component/MainSideComponent/SearchAside";
import SearchHistory from "../Component/MainSideComponent/SearchHistory";
import InitialMap from "../MapComponent/InitialMap";
import useStore from "../store";

const ActionAside = styled.aside`
  height: 80vh;
  display: grid;
  grid-template-rows: 150px auto auto 1fr;
  gap: 15px;
  padding: 0 10px;
`;

export default function MainPage() {
  const setModal = useStore((state) => state.setModal);
  const loginUser = useAcStore((state) => state.loginUser);
  const history = useHistory();

  useEffect(() => {
    if (loginUser) history.push(`/logged-in/${loginUser.id}`);
  });
  return (
    <>
      <ActionAside>
        <SearchAside />
        <SavedLocation />

        {/* <div>
          <h3>Saved Location</h3>
          <button>Home</button>
          <button>Office</button>
          <button>School</button>
          <button>+ New Address</button>
        </div> */}

        {/* <div>
          <h3>Saved Journey</h3>
          <ul>
            <li>Wembley Stadium - Soho</li>
          </ul>
        </div> */}

        {/* <div>
          <h3>Searched History</h3>
          <ul className="search-history-list">
            <li>Mayfair - London Eye</li>
            <li>Camden market - White City</li>
            <li>Wembley Stadium - Soho</li>
          </ul>
        </div> */}
        <SearchHistory />
      </ActionAside>
      <InitialMap />
    </>
  );
}
