import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import CreateNewBoard from "./CreateNewBoard";

function SideBar() {
  const { data, setData } = useContext(DataContext);

  const getBoardNames = data.map((item) => item.board);
  const filteredBoardNames = [...new Set(getBoardNames)].filter((item) => item);

  const urlItem = (text) => {
    return text.replace(" ", "-");
  };

  const sidebarBoards = filteredBoardNames.map((item, i) => (
    <div key={i}>
      <Link to={`/board/${urlItem(item)}`}>
        <SideBarListItem>{item}</SideBarListItem>
      </Link>
    </div>
  ));

  return (
    <StyledSideBar>
      <h2 style={{ margin: "0px 8px", padding: "8px" }}>Boards</h2>
      <SideBarList>
        <div>
          <Link to="/">
            <SideBarListItem>Dashboard</SideBarListItem>
          </Link>
          {sidebarBoards}
        </div>
        <OuterWrapper>
          <CreateNewBoard />
        </OuterWrapper>
      </SideBarList>
    </StyledSideBar>
  );
}

export default SideBar;

const StyledSideBar = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  flex: 0 1 300px;
  padding: 18px;
  text-transform: capitalize;
  overflow: auto;
  height: 100vh;
`;

const SideBarList = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const SideBarListItem = styled.li`
  padding: 8px;
  margin: 8px;

  &:hover {
    background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
    cursor: pointer;
    border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  }
`;

const OuterWrapper = styled.div`
  padding: 8px;
  margin: 8px;
`;
