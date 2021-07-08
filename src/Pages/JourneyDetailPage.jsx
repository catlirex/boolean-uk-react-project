import styled from "styled-components";
import JourneyDetailMap from "../MapComponent/JourneyDetailMap";
import { useHistory, useParams } from "react-router-dom";
import useStore from "../store";
import { Button } from "@material-ui/core";
import SearchResultCard from "../Component/SearchResultCard";
import HomeIcon from "@material-ui/icons/Home";
import TravelPartCard from "../Component/TravelPartCard";

const JourneyAside = styled.aside`
  height: 80vh;
  display: grid;
  grid-template-rows: 50px auto 1fr;
  padding: 10px;
  position: fixed;
  overflow: scroll;
  left: 20px;
  width: 35vw;
  .travel-part-list {
    display: grid;
    gap: 3px;
    padding: 10px 0;
  }

  nav {
    position: fixed;
    bottom: 3vh;
  }
  .search-info {
    padding: 3px;
    margin-bottom: 5px;
    background-color: rgb(232, 232, 232);
    border-radius: 5px;
  }
`;

export default function JourneyDetailPage() {
  const { resultIndex, searchPath } = useParams();
  const history = useHistory();
  const searchResult = useStore((state) => state.searchResult);
  console.log(searchResult[resultIndex]);

  return (
    <>
      <JourneyAside>
        <div>
          <p className="search-info">
            From: {searchResult[resultIndex].route_parts[0].from_point_name}
          </p>
          <p className="search-info">
            To:{" "}
            {
              searchResult[resultIndex].route_parts[
                searchResult[resultIndex].route_parts.length - 1
              ].to_point_name
            }
          </p>
        </div>
        <SearchResultCard
          index={resultIndex}
          result={searchResult[resultIndex]}
          searchPath={searchPath}
        />

        <section>
          <h3>Travel Detail:</h3>
          <ul className="travel-part-list">
            {searchResult[resultIndex].route_parts.map((part, index) => (
              <TravelPartCard key={index + part.mode} part={part} />
            ))}
          </ul>
        </section>
        <nav>
          <Button variant="contained" onClick={() => history.push("/")}>
            <HomeIcon />
          </Button>
          <Button
            variant="contained"
            onClick={() => history.push(`/search/${searchPath}`)}
          >
            Back to Result
          </Button>
          <Button variant="contained" onClick={() => setModal("newSearch")}>
            New Search
          </Button>
        </nav>
      </JourneyAside>
      <div></div>

      <JourneyDetailMap result={searchResult[resultIndex]} />
    </>
  );
}
