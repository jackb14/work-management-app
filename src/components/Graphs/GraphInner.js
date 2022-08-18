import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function GraphInner() {
  return (
    <>
      <StyledGraph>d</StyledGraph>
    </>
  );
}

export default GraphInner;

const StyledGraph = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.fadedDarkBackground};
  padding: 16px;
  margin: 16px 0;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
`;
