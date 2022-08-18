import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function Item({ children }) {
  return (
    <>
      <StyledItem>{children}</StyledItem>
    </>
  );
}

export default Item;

const StyledItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
`;
