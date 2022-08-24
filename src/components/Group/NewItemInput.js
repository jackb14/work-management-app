import { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function NewInputItem({ boardName }) {
  const { data } = useContext(DataContext);
  const [newItem, setNewItem] = useState("");

  // UPDATE
  const handleNewItem = (e) => {
    e.preventDefault();
    handleSaveItem();
    setNewItem("");
  };

  const handleSaveItem = async () => {
    try {
      await fetch("https://work-management-app.herokuapp.com/api/items", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newItem,
          board: boardName,
          status: "",
        }),
      });
      window.location.reload();
    } catch (e) {
      return e;
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleNewItem(e)}>
        <StyledNewInputItem
          type="text"
          placeholder="+ Add item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </form>
    </>
  );
}

export default NewInputItem;

const StyledNewInputItem = styled.input`
  padding: 16px 8px;
  width: 100%;
  color: white;
  background-color: ${CUSTOM_STYLES.COLORS.fadedDarkBackground};
  font-size: 1rem;
  border: none;

  &::placeholder {
    color: ${CUSTOM_STYLES.COLORS.lightGrey};
    font-size: 1rem;
  }
`;
