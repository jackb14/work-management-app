import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import GraphInner from "./GraphInner";

function GraphContainer({ heading }) {
  return (
    <>
      <StyledGraphContainer>
        <h3 style={{ fontWeight: "400" }}>{heading}dd</h3>
        <GraphInner />
        <StyledGraphFooter>
          <h3 style={{ fontWeight: "400" }}>280</h3>
          <p>Operations</p>
        </StyledGraphFooter>
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

const StyledGraphFooter = styled.div``;
