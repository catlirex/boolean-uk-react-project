import useStore from "../store";
import styled from "styled-components";
import { splitDurationToNumberArray } from "../helperFunction";
import { useHistory } from "react-router-dom";

const ResultCard = styled.li`
  border: 1px rgb(177, 255, 229) solid;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: rgb(177, 255, 229, 0.5);

  display: grid;
  grid-auto-flow: column;

  &:hover {
    background-color: rgb(177, 255, 229);
  }

  .duration {
    font-size: 2rem;
    font-weight: 800;
  }
  .path-time-container {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    gap: 5px;
  }
  .time {
    font-weight: 700;
    text-align: center;
    max-width: 100px;
  }
  span {
    width: auto;
    font-size: 0.8rem;
  }
  .path-container {
    display: grid;
    grid-auto-flow: column;
    padding-bottom: 10px;
    align-items: center;
  }
  .path-icon {
    height: 30px;
    padding: 2px;
  }
  .duration-container {
    text-align: right;
  }
`;

const MODE_IMAGE = {
  foot: "/assets/walkman.png",
  bus: "/assets/Buses.png",
  overground: "/assets/Overground.png",
  dlr: "/assets/DLR.png",
  train: "/assets/Train.png",

  Northern: "/assets/Northern.png",
  Central: "/assets/Central.png",
  Circle: "/assets/Circle.png",
  District: "/assets/District.png",
  Jubilee: "/assets/Jubilee.png",
  Metropolitan: "/assets/Metropolitan.png",
  Piccadilly: "/assets/Piccadilly.png",
  Victoria: "/assets/Victoria.png",
  Bakerloo: "/assets/Bakerloo.png",
  "Hammersmith & City": "/assets/HammerSmith_City.png",
  "Waterloo & City": "/assets/Waterloo_City.png",
};

export default function SearchResultCard({ result, index, searchPath }) {
  const searchResult = useStore((state) => state.searchResult);
  let durationArray = splitDurationToNumberArray(result.duration);
  const history = useHistory();

  function handleOnClick() {
    history.push(`/search/${searchPath}/result-${index}`);
  }
  return (
    <ResultCard onClick={() => handleOnClick()}>
      <div>
        <div className="path-container">
          {result.route_parts.map((part, index) => (
            <>
              {index !== 0 ? (
                <img height="10" src="/assets/right-arrow.png" />
              ) : null}
              <img
                className="path-icon"
                src={
                  part.mode === "tube"
                    ? MODE_IMAGE[part.line_name]
                    : MODE_IMAGE[part.mode]
                }
              />
            </>
          ))}
        </div>

        <div className="path-time-container">
          <div>
            <span>Depart</span>
            <p className="time"> {result.departure_time}</p>
          </div>
          <div>
            <span>Arrive</span>
            <p className="time">{result.arrival_time}</p>
          </div>
        </div>
      </div>
      <div className="duration-container">
        <span className="duration">
          {durationArray[0] * 60 + durationArray[1]}
        </span>
        <span> mins</span>
      </div>
    </ResultCard>
  );
}
