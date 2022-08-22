import { useState } from "react";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";

function NewInputItem({ boardName }) {
  const [newItem, setNewItem] = useState("");

  // UPDATE
  const handleNewItem = () => {
    handleSaveItem();
    setNewItem("");
  };

  const handleSaveItem = async () => {
    try {
      await fetch("http://localhost:8800/api/items", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newItem,
          status: "",
          board: boardName,
        }),
      });
      console.log("done");
    } catch (e) {
      return e;
    }
  };

  return (
    <>
      <form onSubmit={() => handleNewItem()}>
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
