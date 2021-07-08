import styled from "styled-components";
import ToFromMap from "../MapComponent/ToFromMap";
import useStore from "../store";
import SearchResultCard from "../Component/SearchResultCard";
import { IconButton } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import RefreshIcon from "@material-ui/icons/Refresh";
import FooterResultPage from "../Component/FooterResultPage";
import { useEffect } from "react";
import useAcStore from "../acStore";

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
  .result-not-found {
    display: grid;
    gap: 20px;
  }
`;

export default function SearchResultPage() {
  const searchResult = useStore((state) => state.searchResult);
  const { searchPath } = useParams();
  const searchValue = useStore((state) => state.searchValue);
  const loginUser = useAcStore((state) => state.loginUser);
  const viewHistory = useStore((state) => state.viewHistory);
  const addNoLoginSearchHistory = useStore(
    (state) => state.addNoLoginSearchHistory
  );
  const addHistoryToLoginUser = useAcStore(
    (state) => state.addHistoryToLoginUser
  );
  console.log(searchResult);

  useEffect(() => {
    if (!searchResult || searchResult.length === 0 || viewHistory) return;
    let newHistory = {
      from: searchResult[0].route_parts[0].from_point_name,
      to: searchResult[0].route_parts[searchResult[0].route_parts.length - 1]
        .to_point_name,
      fromPostcode: searchValue.fromPostcode,
      toPostcode: searchValue.toPostcode,
    };
    if (!loginUser) addNoLoginSearchHistory(newHistory);
    else addHistoryToLoginUser(newHistory);
  }, [searchResult]);

  if (searchResult === null) {
    return (
      <>
        <SearchAside>
          <h2>Search Result: Loading...</h2>
        </SearchAside>
      </>
    );
  }

  if (searchResult.length === 0) {
    return (
      <>
        <SearchAside>
          <div className="result-not-found">
            <h2>Search Not Found </h2>
            <h3>
              (From {searchValue.fromPostcode} to {searchValue.toPostcode})
            </h3>
            <span>Please postcode input and start new search</span>
            <FooterResultPage />
          </div>
        </SearchAside>
      </>
    );
  }

  return (
    <>
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

        <footer>
          <FooterResultPage />
        </footer>
      </SearchAside>
      <div></div>
      <ToFromMap />
    </>
  );
}
