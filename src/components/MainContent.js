import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";
import Board from "./Board";
import Header from "./Header";
import NewGroupBtn from "./Button";
import Graph from "./Graphs/Graph";

function MainContent() {
  return (
    <StyledMainContent>
      <Header />
      <Board />
      {/* <NewGroupBtn>Create new group</NewGroupBtn> */}
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
