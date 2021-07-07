import { Main } from "../Component/StyledMain";
import styled from "styled-components";
import ToFromMap from "../MapComponent/ToFromMap";
import useStore from "../store";
import SearchResultCard from "../Component/SearchResultCard";
import { Button, IconButton } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import RefreshIcon from "@material-ui/icons/Refresh";
import HomeIcon from "@material-ui/icons/Home";

const SearchAside = styled.aside`
  height: 80vh;

  padding: 10px;
  position: fixed;
  overflow: scroll;
  left: 20px;
  width: 35vw;

  h2 {
    padding: 10px 0;
  }

  p {
    padding: 5px;
    margin-bottom: 5px;
    background-color: rgb(232, 232, 232);
    border-radius: 5px;
  }
  nav {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  }
  .result-header {
    display: grid;
    grid-template-columns: 1fr 50px;
    padding: 10px;
  }
`;

export default function SearchResultPage() {
  const searchResult = useStore((state) => state.searchResult);
  const setModal = useStore((state) => state.setModal);
  const { searchPath } = useParams();

  const history = useHistory();

  console.log(searchResult);

  if (searchResult.length === 0) {
    return (
      <Main>
        <SearchAside>
          <h2>Search Result: Loading...</h2>
        </SearchAside>
      </Main>
    );
  }

  return (
    <Main>
      <SearchAside>
        <div>
          <div className="result-header">
            <h2>Search Result {`(${searchResult.length})`}</h2>

            <IconButton aria-label="refresh" disabled>
              <RefreshIcon />
            </IconButton>
          </div>

          <p>From: {searchResult[0].route_parts[0].from_point_name}</p>
          <p>
            To:{" "}
            {
              searchResult[0].route_parts[
                searchResult[0].route_parts.length - 1
              ].to_point_name
            }
          </p>
        </div>

        <ul className="result-list-container">
          {searchResult.map((result, index) => (
            <SearchResultCard
              key={index}
              index={index}
              result={result}
              searchPath={searchPath}
            />
          ))}
        </ul>

        <nav>
          <Button variant="contained" onClick={() => history.push("/")}>
            <HomeIcon />
          </Button>

          <Button variant="contained" onClick={() => setModal("newSearch")}>
            New Search
          </Button>
          <Button variant="contained" disabled>
            Save Journey
          </Button>
        </nav>
      </SearchAside>
      <div></div>
      <ToFromMap />
    </Main>
  );
}
