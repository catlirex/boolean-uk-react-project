import useAcStore from "../../acStore";
import useStore from "../../store";
import SearchHistoryCard from "./SearchHistoryCard";
import styled from "styled-components";

const SearchHistoryList = styled.ul`
  display: grid;
  gap: 10px;
  padding: 10px 0;
`;

export default function SearchHistory() {
  const loginUser = useAcStore((state) => state.loginUser);
  const noLoginSearchHistory = useStore((state) => state.noLoginSearchHistory);
  console.log("noLoginSearchHistory", noLoginSearchHistory);

  return (
    <div>
      <h3>Searched History</h3>
      <SearchHistoryList>
        {noLoginSearchHistory.map((history, index) => (
          <SearchHistoryCard history={history} key={index} index={index} />
        ))}
      </SearchHistoryList>
    </div>
  );
}
