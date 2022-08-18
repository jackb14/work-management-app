import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import GraphColumn from "./GraphColumn";

function GraphContainer({ heading }) {
  return (
    <>
      <StyledGraphContainer>
        <h3 style={{ fontWeight: "400" }}>{heading}</h3>
        <StyledGraph>
          <GraphColumn name="Empty" number="20" color="grey" />
          <GraphColumn name="Not started" number="20" color="red" />
          <GraphColumn name="Working on it" number="30" color="orange" />
          <GraphColumn name="To review" number="70" color="green" />
        </StyledGraph>
        <h3 style={{ fontWeight: "400" }}>Total items: 480</h3>
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
