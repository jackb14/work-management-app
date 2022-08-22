import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import Graph from "../Graphs/Graph";

function Statistics() {
  const { data, setData } = useContext(DataContext);
  return (
    <>
      <OuterWrapper>
        <Graph boardItems={data} />
      </OuterWrapper>
    </>
  );
}

export default Statistics;

const OuterWrapper = styled.div`
  width: 100%;
`;
