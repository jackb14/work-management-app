import MainContent from "./MainContent";
import SideBar from "./SideBar/SideBar";
import Flex from "./Styles/Flex";

function MainLayout() {
  return (
    <>
      <Flex>
        <SideBar />
        <MainContent />
      </Flex>
    </>
  );
}

export default MainLayout;
