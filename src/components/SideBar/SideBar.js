import styled from 'styled-components';
import { CUSTOM_STYLES } from '../../GlobalStyles';
import SideBarList from './SideBarList';
import SideBarListItem from './SideBarListItem';

function SideBar() {
    return (
        <StyledSideBar>
            <h2 style={{marginBottom: '24px'}}>Boards</h2>
            <SideBarList>
                <SideBarListItem>Board 1</SideBarListItem>
                <SideBarListItem>Board 2</SideBarListItem>
                <SideBarListItem>Board 3</SideBarListItem>
                <SideBarListItem>Board 4</SideBarListItem>
                <SideBarListItem>Board 5</SideBarListItem>
            </SideBarList>
        </StyledSideBar>
    )
}

const StyledSideBar = styled.div`
    background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
    flex: 0 1 250px;
    padding: 18px;
`

export default SideBar;