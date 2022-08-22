import styled from "styled-components";
import MainContent from "./MainContent";
import SideBar from "./SideBar/SideBar";

function MainLayout() {
  return (
    <>
      <StyledWrapper>
        <SideBar />
        <MainContent />
      </StyledWrapper>
    </>
  );
}

export default MainLayout;

const StyledWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;
