import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function NewInputItem() {
  return (
    <>
      <StyledNewInputItem placeholder="+ Add item" />
    </>
  );
}

export default NewInputItem;

const StyledNewInputItem = styled.input`
  padding: 16px 8px;
  width: 100%;
  color: white;
  background-color: ${CUSTOM_STYLES.COLORS.fadedDarkBackground};
  font-size: 1rem;
  border: none;

  &::placeholder {
    color: ${CUSTOM_STYLES.COLORS.lightGrey};
    font-size: 1rem;
  }
`;
