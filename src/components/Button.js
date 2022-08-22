import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";

function Button({ children, color, width }) {
  return (
    <>
      <StyledButton color={color} width={width}>
        {children}
      </StyledButton>
    </>
  );
}

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  padding: 8px 12px;
  border: none;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  width: ${(props) => props.width};
`;
