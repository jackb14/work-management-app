import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";

const Button = styled.button`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  padding: 12px;
  border: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  color: white;
  font-size: 0.9rem;
`;

export default Button;
