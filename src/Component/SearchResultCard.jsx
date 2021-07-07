import useStore from "../store";
import styled from "styled-components";
import { splitDurationToNumberArray } from "../helperFunction";
import { useHistory } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { MODE_IMAGE } from "../consistent";

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
    justify-content: flex-start;

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

export default function SearchResultCard({ result, index, searchPath }) {
  const searchResult = useStore((state) => state.searchResult);
  let durationArray = splitDurationToNumberArray(result.duration);
  const history = useHistory();

  function handleOnClick() {
    history.push(`/search/${searchPath}/${index}`);
  }
  return (
    <ResultCard onClick={() => handleOnClick()}>
      <div>
        <div className="path-container">
          {result.route_parts.map((part, index) => (
            <div key={"path" + index}>
              {index !== 0 ? <ArrowRightIcon /> : null}
              <img
                className="path-icon"
                src={
                  part.mode === "tube"
                    ? MODE_IMAGE[part.line_name]
                    : MODE_IMAGE[part.mode]
                }
              />
            </div>
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
