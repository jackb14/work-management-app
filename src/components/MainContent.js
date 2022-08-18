import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";
import Group from "./Group/Group";
import Header from "./Header";
import NewGroupBtn from "./Button";
import Graph from "./Graphs/Graph";

function MainContent() {
  return (
    <StyledMainContent>
      <Header />
      <Graph />
      <Group />
      <NewGroupBtn>Create new group</NewGroupBtn>
    </StyledMainContent>
  );
}

const StyledMainContent = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
  flex: 1;
  height: 100vh;
  padding: 24px;
  overflow-y: auto;
`;

export default MainContent;
