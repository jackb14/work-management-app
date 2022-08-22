import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import GraphColumn from "./GraphColumn";

function GraphContainer({ heading, boardItems }) {
  const totalSum = boardItems.length; // gets total sum to calculate the 100% ratio in the column component

  const filterFunc = (name) => {
    const length = boardItems.filter((item) => item.status === name).length;
    return length > 0 ? length : 0;
  };

  const totalEmpty = boardItems.filter(
    (item) => (item.status === "") | "Empty"
  ).length;

  return (
    <>
      <StyledGraphContainer>
        <h3 style={{ fontWeight: "400" }}>{heading}</h3>
        <StyledGraph>
          <GraphColumn
            name="Empty"
            number={totalEmpty}
            totalSum={totalSum}
            color={CUSTOM_STYLES.COLORS.grey}
          />
          <GraphColumn
            name="Not started"
            number={filterFunc("Not started")}
            totalSum={totalSum}
            color={CUSTOM_STYLES.COLORS.red}
          />
          <GraphColumn
            name="Working on it"
            number={filterFunc("Working on it")}
            totalSum={totalSum}
            color={CUSTOM_STYLES.COLORS.yellow}
          />
          <GraphColumn
            name="To review"
            number={filterFunc("To review")}
            totalSum={totalSum}
            color={CUSTOM_STYLES.COLORS.green}
          />
        </StyledGraph>
        <h3 style={{ fontWeight: "400" }}>Total items: {totalSum}</h3>
      </StyledGraphContainer>
    </>
  );
}

export default GraphContainer;

const StyledGraphContainer = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  padding: 16px;
  margin-top: 16px;
  flex: 1;
`;

const StyledGraph = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${CUSTOM_STYLES.COLORS.fadedDarkBackground};
  padding: 16px;
  margin: 16px 0;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  height: 250px;
`;
