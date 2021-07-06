import { Main } from "../Component/StyledMain";
import styled from "styled-components";
import ToFromMap from "../MapComponent/ToFromMap";
import useStore from "../store";

const SearchAside = styled.aside`
  height: 80vh;
  margin-right: 20px;
`;

const ResultCard = styled.li`
  border: 1px black solid;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
`;

export default function SearchResultPage() {
  const searchResult = useStore((state) => state.searchResult);
  console.log(searchResult);
  return (
    <Main>
      <SearchAside>
        <div>
          <h2>Search Result:</h2>
          <h3>1 Mayfair Place - specified point, Wembley Park</h3>
        </div>
        <ul>
          <ResultCard>
            <p>departure_time": "14:57"</p>
            <p>"arrival_time": "15:41"</p>
            <p>"duration": "00:44:00"</p>
            <p>{`foot > tube:Jubilee > tube:Metropolitan> foot`}</p>
          </ResultCard>
          <ResultCard>
            <p>departure_time": "14:57"</p>
            <p>"arrival_time": "15:41"</p>
            <p>"duration": "00:44:00"</p>
            <p>{`foot > tube:Jubilee > tube:Metropolitan> foot`}</p>
          </ResultCard>
          <ResultCard>
            <p>departure_time": "14:57"</p>
            <p>"arrival_time": "15:41"</p>
            <p>"duration": "00:44:00"</p>
            <p>{`foot > tube:Jubilee > tube:Metropolitan> foot`}</p>
          </ResultCard>
        </ul>

        <nav>
          <button>Back to Homepage</button>
          <button>NewSearch</button>
          <button>Save Journey</button>
        </nav>
      </SearchAside>
      <ToFromMap />
    </Main>
  );
}
