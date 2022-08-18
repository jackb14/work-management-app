import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function GraphColumn({ name, number }) {
  // total sum of all should be the 100% mark

  const totalSum = number;
  console.log(totalSum);

  return (
    <>
      <StyledColumnWrapper>
        <StyledColumn height={number}></StyledColumn>
        {name} ({number || 0})
      </StyledColumnWrapper>
    </>
  );
}

export default GraphColumn;

const StyledColumn = styled.div`
  background-color: orange;
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
