import styled from "styled-components";
import GraphContainer from "./GraphContainer";

function Graph({ boardItems, title }) {
  return (
    <>
      <h3 style={{ fontWeight: "400", marginTop: "32px" }}>{title}</h3>
      <StyledGraphWrapper>
        <GraphContainer heading="Status Overview" boardItems={boardItems} />
      </StyledGraphWrapper>
    </>
  );
}

export default Graph;

const StyledGraphWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 32px;
`;
