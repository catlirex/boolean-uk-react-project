import styled from "styled-components";

const HistoryCard = styled.li`
  background-color: ${(props) => (props.colorPointer ? "#95e1d3" : "#bdece3")};

  width: fit-content;
  padding 20px;
  border-radius:5px;
  box-shadow: 0px 1px 5px 1px lightgray;

  h3{
      font-weight:400;
      font-size:1.1rem
  }
   .toward-box {
    width: 5px;
    height: 20px;
    border-radius: 2px;
    background-color: rgb(72, 72, 72);
    margin: 3px 5px;
  }
`;

export default function SearchHistoryCard({ history, index }) {
  let colorPointer = index % 2;
  console.log(history);

  return (
    <>
      {colorPointer ? (
        <HistoryCard colorPointer>
          <h3>
            {history.from} ({history.fromPostcode})
          </h3>
          <div className="toward-box"></div>
          <h3>
            {history.to} ({history.toPostcode})
          </h3>
        </HistoryCard>
      ) : (
        <HistoryCard>
          <h3>
            {history.from} ({history.fromPostcode})
          </h3>
          <div className="toward-box"></div>
          <h3>
            {history.to} ({history.toPostcode})
          </h3>
        </HistoryCard>
      )}
    </>
  );
}
