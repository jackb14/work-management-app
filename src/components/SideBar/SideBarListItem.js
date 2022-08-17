import styled from 'styled-components';
import { CUSTOM_STYLES } from '../../GlobalStyles';

const SideBarListItem = styled.li`
    padding: 8px;
    margin: 8px;

    &:hover {
        background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
        cursor: pointer;
        border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
    }
`

export default SideBarListItem;