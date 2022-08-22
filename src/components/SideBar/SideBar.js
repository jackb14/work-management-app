import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import Button from "../Button";
import CreateNewBoard from "./CreateNewBoard";
import icon from "../../assets/icon-arrow-left.svg";

function SideBar() {
  const { data, setData } = useContext(DataContext);
  const [sidebarWidth, setSidebarWidth] = useState(
    CUSTOM_SIDEBAR_STYLES.regWidth
  );
  const [sidebarDisplay, setSidebarDisplay] = useState("block");

  const handleSidebarCollapse = () => {
    if (sidebarWidth === CUSTOM_SIDEBAR_STYLES.regWidth) {
      setSidebarWidth(CUSTOM_SIDEBAR_STYLES.shrunkWidth);
      setSidebarDisplay("none");
    } else {
      setSidebarWidth(CUSTOM_SIDEBAR_STYLES.regWidth);
      setSidebarDisplay("block");
    }
  };

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
    <StyledSideBar width={sidebarWidth}>
      <StyledHeader>
        <SidebarHideWrapper sidebarDisplay={sidebarDisplay}>
          <h2 style={{ margin: "0px 8px", padding: "8px" }}>Boards</h2>
        </SidebarHideWrapper>
        <div onClick={() => handleSidebarCollapse()}>
          <Button color={CUSTOM_STYLES.COLORS.darkestBackground}>
            {sidebarDisplay === "block" ? (
              <img src={icon} alt="icon" />
            ) : (
              <RotatedImg src={icon} alt="icon" />
            )}
          </Button>
        </div>
      </StyledHeader>
      <SidebarHideWrapper sidebarDisplay={sidebarDisplay}>
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
      </SidebarHideWrapper>
    </StyledSideBar>
  );
}

export default SideBar;

const StyledSideBar = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  flex: ${(props) => props.width};
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

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CUSTOM_SIDEBAR_STYLES = {
  regWidth: "0 1 300px",
  shrunkWidth: "0 1 75px",
};

const SidebarHideWrapper = styled.div`
  display: ${(props) => props.sidebarDisplay};
`;

const RotatedImg = styled.img`
  transform: rotate(180deg);
`;
