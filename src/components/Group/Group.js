import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import StyledItem from "./Items";
import NewInputItem from "./NewItemInput";

function Group() {
  return (
    <>
      <StyledGroupHeader>
        <h3 style={{ fontWeight: "400" }}>Group title</h3>
        <GroupHeadingFlex>
          <p style={{ marginLeft: "16px" }}>Item name</p>
          <p style={{ marginRight: "130px" }}>Status</p>
        </GroupHeadingFlex>
      </StyledGroupHeader>
      <StyledGroup>
        <StyledItem />
        <NewInputItem />
      </StyledGroup>
    </>
  );
}

const StyledGroupHeader = styled.div`
  padding-top: 12px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius} 0 0;
`;
const StyledGroup = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-left: 5px solid orange;
  border-radius: 0 0 ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius};
  overflow: hidden;
  margin-bottom: 24px;
`;

const GroupHeadingFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius} 0 0;
  padding: 16px 8px;
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
`;

export default Group;
