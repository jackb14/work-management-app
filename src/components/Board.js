import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";
import NewInputItem from "./Group/NewItemInput";
import Graph from "./Graphs/Graph";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
import ItemSelector from "./Group/ItemSelector";
import DeleteItem from "./Group/DeleteItem";
import { NewDataContext } from "../DataContext";

function Board() {
  const data = useContext(DataContext);
  const [itemsData, setItemsData] = useState([]); // updated state to allow the list to update without refresh

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
      updateStatus(value, currentItem, item, value);
    } catch (e) {
      return e;
    }
  };

  // Function to accomodate updating state with the new status value
  const updateStatus = (status, currentItem, item, value) => {
    if (value === status) {
      const newData = itemsData.filter((item) => item._id !== currentItem);
      setItemsData([
        ...newData,
        { _id: item._id, name: item.name, status: status },
      ]);
    }
  };

  // DATA OUTPUT
  let mappedData;
  if (itemsData.length > 0) {
    mappedData = itemsData.map((item) => (
      <StyledItem key={item._id} color={item.status}>
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
      </StyledItem>
    ));
  }

  return (
    <>
      <NewDataContext.Provider value={itemsData}>
        <Graph />
      </NewDataContext.Provider>
      <StyledGroupHeader>
        <StyledTopHeaderFlex>
          <h3 style={{ fontWeight: "400" }}>Current Tasks</h3>
          <p>
            <b>Sorted by:</b> Oldest to Newest
          </p>
        </StyledTopHeaderFlex>
        <GroupHeadingFlex>
          <p style={{ marginLeft: "16px" }}>Item name</p>
          <p style={{ marginRight: "130px" }}>Status</p>
        </GroupHeadingFlex>
      </StyledGroupHeader>
      <StyledGroup>
        {mappedData}
        <NewInputItem />
      </StyledGroup>
    </>
  );
}

export default Board;

const StyledGroupHeader = styled.div`
  padding-top: 12px;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius} 0 0;
`;

const StyledTopHeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledGroup = styled.div`
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-left: 4px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  border-radius: 0 0 ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius};
  overflow: hidden;
  margin-bottom: 24px;
`;

const GroupHeadingFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  background-color: ${CUSTOM_STYLES.COLORS.darkBackground};
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius}
    ${CUSTOM_STYLES.OTHER.borderRadius} 0 0;
  padding: 16px 8px;
  border-bottom: 4px solid ${CUSTOM_STYLES.COLORS.lightGrey};
`;

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

const StyledItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${CUSTOM_STYLES.COLORS.lightGrey};
  background-color: ${(props) =>
    props.color === "Not started"
      ? CUSTOM_STYLES.COLORS.fadedRed
      : props.color === "Working on it"
      ? CUSTOM_STYLES.COLORS.fadedYellow
      : props.color === "To review"
      ? CUSTOM_STYLES.COLORS.fadedGreen
      : CUSTOM_STYLES.COLORS.darkBackground};
`;
