import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";
import Board from "./Board";

function MainContent() {
  return (
    <StyledMainContent>
      <Board />
    </StyledMainContent>
  );
}

const StyledMainContent = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
  flex: 1;
  height: 100vh;
  padding: 32px;
  overflow-y: auto;
`;

export default MainContent;
