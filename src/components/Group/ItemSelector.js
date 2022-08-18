import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function ItemSelector({ options, handleUpdate, item }) {
  const selectionOptions = options.map((option, i) => {
    if (item.status !== option) {
      return (
        <option key={i} value={option}>
          {option}
        </option>
      );
    }
  });

  return (
    <>
      <StyledSelect onChange={(e) => handleUpdate(e.target.value, item)}>
        <option>{item.status}</option>
        {selectionOptions}
      </StyledSelect>
    </>
  );
}

export default ItemSelector;

const StyledSelect = styled.select`
  padding: 0 8px;
  background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
  border: none;
  border-right: 10px solid ${CUSTOM_STYLES.COLORS.darkestBackground};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  color: white;
  font-size: 1rem;
  padding: 8px 8px 8px 8px;
  width: 150px;
  cursor: pointer;
`;
