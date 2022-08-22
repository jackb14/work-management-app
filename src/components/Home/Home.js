import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import Header from "../Header";
import SideBar from "../SideBar/SideBar";
import Statistics from "./Statistics";

function Home() {
  const date = new Date();
  const time = date.toLocaleTimeString("en-GB", { hour: "2-digit" }) * 10;

  const checkTime = () => {
    if (time > 10 && time < 120) {
      return "morning";
    } else if (time > 120 && time < 170) {
      return "afternoon";
    } else if (time > 170 < 240) {
      return "evening";
    }
  };

  const timeOfDay = checkTime();

  return (
    <FlexWrapper>
      <SideBar />
      <StyledWrapper>
        <Header>{timeOfDay ? "Good " + timeOfDay + "!" : "Hello!"}</Header>
        <h3 style={{ fontWeight: 400 }}>
          Open a board on the sidebar to view your items.
        </h3>
        <Statistics />
      </StyledWrapper>
    </FlexWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
  flex: 1;
  height: 100vh;
  padding: 32px;
  overflow-y: auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;
