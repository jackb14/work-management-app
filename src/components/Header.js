import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";

function Header({ children }) {
  return (
    <StyledHeader>
      <StyledHeading style={{ padding: "8px", marginBottom: "16px" }}>
        {children}
      </StyledHeading>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  border-bottom: 2px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  margin-bottom: 24px;
`;

const StyledHeading = styled.h2`
  text-transform: capitalize;
`;
