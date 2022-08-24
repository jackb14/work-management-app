import Header from "./Header";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../GlobalStyles";
import NewInputItem from "./Group/NewItemInput";
import Graph from "./Graphs/Graph";
import { useContext } from "react";
import { DataContext } from "../DataContext";
import ItemSelector from "./Group/ItemSelector";
import DeleteItem from "./Group/DeleteItem";
import { useParams } from "react-router-dom";

function Board() {
  const { data, setData } = useContext(DataContext);
  const { name } = useParams();

  const boardName = name.replace("-", " ");

  const hasBoardItem = data.map((item) => {
    if (item.board) {
      return item;
    } else {
      return 0;
    }
  });

  const boardItems = hasBoardItem
    .map((item) => {
      if (item.board === boardName) {
        return item;
      } else {
        return 0;
      }
    })
    .filter((item) => item !== 0);

  // DELETE
  const handleDelete = async (item) => {
    try {
      await fetch(
        `https://work-management-app.herokuapp.com/api/items/${item._id}`,
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
      await fetch(
        `https://work-management-app.herokuapp.com/api/items/${item._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: value,
            board: boardName,
          }),
        }
      );
      const currentItem = item._id;
      updateStatus(value, currentItem, item, value, boardName);
    } catch (e) {
      return e;
    }
  };

  // Function to accomodate updating state with the new status value
  const updateStatus = (status, currentItem, item, value, boardName) => {
    if (value === status) {
      const newData = data.filter((item) => item._id !== currentItem);
      setData([
        ...newData,
        { _id: item._id, name: item.name, status: status, board: boardName },
      ]);
    }
  };

  // DATA OUTPUT
  let mappedData;
  if (data.length > 0) {
    mappedData = boardItems.map((item) => {
      return (
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
      );
    });
  }

  return (
    <>
      <Header>{boardName}</Header>
      <Graph boardItems={boardItems} title="Board Summary" />
      <StyledGroupHeader>
        <StyledTopHeaderFlex>
          <h3 style={{ fontWeight: "400" }}>Items</h3>
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
        <NewInputItem boardName={boardName} />
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
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
`;

const ItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
    margin-top: 12px;
  }
`;

const ActionsFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    align-items: center;
    margin: 12px 0;
    justify-content: space-between;
  }
`;

const StyledItem = styled.div`
  padding: 14px;
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
