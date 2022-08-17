import styled from 'styled-components';
import { CUSTOM_STYLES } from '../GlobalStyles';
import Group from './Group/Group';
import Header from './Header';

function MainContent() {
    return (
        <StyledMainContent>
            <Header />
            <Group/>
        </StyledMainContent>
    )
}

const StyledMainContent = styled.div`
    background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
    flex: 1;
    height: 100vh;
    padding: 24px;
`;

export default MainContent;
