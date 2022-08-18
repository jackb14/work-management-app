import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteItem from "./DeleteItem";
import Item from "./Item";
import ItemSelector from "./ItemSelector";
import NewInputItem from "./NewItemInput";

function Items() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState("loading...");

  useEffect(() => {
    const items = async () => {
      const res = await fetch("http://localhost:8800/api/items");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    items();
  }, []);

  // DELETE
  const handleDelete = async (item) => {
    try {
      const fetchResponse = await fetch(
        `http://localhost:8800/api/items/${item._id}`,
        {
          method: "DELETE",
        }
      );
      const currentItem = item._id;
      const newData = data.filter((item) => item._id !== currentItem);
      setData(newData);
    } catch (e) {
      return e;
    }
  };

  // UPDATE
  const handleUpdate = async (value, item) => {
    try {
      const fetchResponse = await fetch(
        `http://localhost:8800/api/items/${item._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: value,
          }),
        }
      );
      const currentItem = item._id;
      data.map((item) => {
        if (item._id === currentItem) {
          currentItem.status = value;
        }
      });
      console.log("updated:", data);
    } catch (e) {
      return e;
    }
  };

  // DATA OUTPUT
  let mappedData;
  if (data.length > 0) {
    mappedData = data.map((item) => (
      <Item key={item._id}>
        <ItemFlex>
          {item.name}
          <ActionsFlex>
            <ItemSelector
              value={item.status}
              options={["Not Started", "Working on it", "To Review"]}
              item={item}
              handleUpdate={handleUpdate}
            />
            <DeleteItem item={item} handleDelete={handleDelete} />
          </ActionsFlex>
        </ItemFlex>
      </Item>
    ));
  }

  return <>{mappedData}</>;
}

export default Items;

const ItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionsFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
