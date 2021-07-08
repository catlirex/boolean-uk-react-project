import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useStore from "../../store";

const HistoryCard = styled.li`
  background-color: ${(props) => (props.colorPointer ? "#95e1d3" : "#bdece3")};

  list-style: none;
  max-width: 30vw;
  width: 100%;
  padding 10px;
  border-radius:5px;
  box-shadow: 0px 1px 5px 1px lightgray;


  h3{
      font-weight:400;
      font-size:1rem
  }
   .toward-box {
    width: 3px;
    height: 20px;
    border-radius: 2px;
    background-color: rgb(72, 72, 72);
    margin: 3px 3px;
  }
`;

export default function SearchHistoryCard({ record, index }) {
  let colorPointer = index % 2;
  const getSearchResult = useStore((state) => state.getSearchResult);
  const clearSearchResult = useStore((state) => state.clearSearchResult);
  const updateSearchValue = useStore((state) => state.updateSearchValue);
  const setViewHistory = useStore((state) => state.setViewHistory);
  const history = useHistory();
  console.log(history);

  function handleOnClick() {
    setViewHistory(true);
    clearSearchResult();
    updateSearchValue(record.fromPostcode, record.toPostcode);
    getSearchResult(record.fromPostcode, record.toPostcode);
    history.push(`/search/from-${record.fromPostcode}-to-${record.toPostcode}`);
  }

  return (
    <>
      {colorPointer ? (
        <HistoryCard colorPointer onClick={() => handleOnClick()}>
          <h3>
            {record.from} ({record.fromPostcode})
          </h3>
          <div className="toward-box"></div>
          <h3>
            {record.to} ({record.toPostcode})
          </h3>
        </HistoryCard>
      ) : (
        <HistoryCard onClick={() => handleOnClick()}>
          <h3>
            {record.from} ({record.fromPostcode})
          </h3>
          <div className="toward-box"></div>
          <h3>
            {record.to} ({record.toPostcode})
          </h3>
        </HistoryCard>
      )}
    </>
  );
}
