import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import StyledItem from "./Items";
import NewGroupBtn from "./NewGroupBtn";
import NewInputItem from "./NewItemInput";

function Group() {
  return (
    <>
      <StyledGroupHeader>
        <h3 style={{ fontWeight: "400" }}>Group title</h3>
      </StyledGroupHeader>
      <StyledGroup style={{ marginBottom: "24px" }}>
        <StyledItem />
        <NewInputItem />
      </StyledGroup>
      <NewGroupBtn />
    </>
  );
}

const StyledGroupHeader = styled.div`
  padding: 12px 0 8px 0;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius} 0 0;
`;
const StyledGroup = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-left: 5px solid orange;
  border-radius: 0 0 ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius};
  overflow: hidden;
`;

export default Group;
