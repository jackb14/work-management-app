import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import DeleteItem from "./DeleteItem";
import Item from "./Item";
import ItemSelector from "./ItemSelector";

function Items() {
  const data = useContext(DataContext);

  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    setItemsData(data);
  }, [data]);

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
      const newData = itemsData.filter((item) => item._id !== currentItem);
      setItemsData(newData);
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
      itemsData.map((item) => {
        if (item._id === currentItem) {
          currentItem.status = value;
        }
      });
      console.log("updated:", itemsData);
    } catch (e) {
      return e;
    }
  };

  // DATA OUTPUT
  let mappedData;
  if (itemsData.length > 0) {
    mappedData = itemsData.map((item) => (
      <Item key={item._id}>
        <ItemFlex>
          {item.name}
          <ActionsFlex>
            <ItemSelector
              value={item.status}
              options={["Not started", "Working on it", "To review"]}
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
