import styled from 'styled-components';
import { CUSTOM_STYLES } from '../GlobalStyles';

function Header() {
    return (
        <StyledHeader>
        <h2 style={{padding: '8px', marginBottom: '16px'}}>Board Name</h2>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    border-bottom: 2px solid ${CUSTOM_STYLES.COLORS.lightGrey};
    margin-bottom: 24px;
`

export default Header;