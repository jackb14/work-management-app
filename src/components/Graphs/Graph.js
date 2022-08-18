import styled from "styled-components";
import GraphContainer from "./GraphContainer";

function Graph() {
  return (
    <>
      <h3 style={{ fontWeight: "400", marginTop: "32px" }}>Board Summary</h3>
      <StyledGraphWrapper>
        <GraphContainer />
        <GraphContainer />
      </StyledGraphWrapper>
    </>
  );
}

export default Graph;

const StyledGraphWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 32px;
`;
