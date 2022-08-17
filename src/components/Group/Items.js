import { useEffect, useState } from "react";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function Items() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = async () => {
      const res = await fetch("http://localhost:8800/api/items");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    items();
  }, []);

  console.log(data.length);

  let mappedData;
  if (data.length > 0) {
    mappedData = data.map((item) => (
      <StyledItem key={item._id}>{item.name}</StyledItem>
    ));
  }

  return <>{!loading && mappedData}</>;
}

export default Items;

const StyledItem = styled.div`
  padding: 16px 8px;
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
`;
