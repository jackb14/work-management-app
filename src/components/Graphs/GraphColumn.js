import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function GraphColumn({ name, number, totalSum, color }) {
  return (
    <>
      <StyledColumnWrapper>
        <StyledColumn
          height={number > 0 ? (number / totalSum) * 100 : 0}
          color={color}
        ></StyledColumn>
        {name} ({number || 0})
      </StyledColumnWrapper>
    </>
  );
}

export default GraphColumn;

const StyledColumn = styled.div`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}%;
  width: 100%;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
`;

const StyledColumnWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 8px;
  gap: 1rem;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
