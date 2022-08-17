import styled from 'styled-components'
import { CUSTOM_STYLES } from '../GlobalStyles';

const Button = styled.button`
    background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
    padding: 8px;
    border: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
    border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
    color: white;
`

export default Button;