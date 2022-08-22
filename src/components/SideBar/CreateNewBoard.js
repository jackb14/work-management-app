import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CUSTOM_STYLES } from "../../GlobalStyles";
import Button from "../Button";

function CreateNewBoard() {
  const [newBoardName, setNewBoardName] = useState("");
  const [inputDisplay, setInputDisplay] = useState("none");

  const urlBoardName = newBoardName.replace(" ", "-");

  const submitAction = () => {
    setNewBoardName("");
    setInputDisplay("none");
  };

  return (
    <>
      <div onClick={() => setInputDisplay("block")}>
        <Button color={CUSTOM_STYLES.COLORS.royalBlue} width="100%">
          + New Board
        </Button>
      </div>
      <InputContainer inputDisplay={inputDisplay}>
        <h4 style={{ margin: "1rem 0" }}>Create a New Board:</h4>
        <StyledInput
          value={newBoardName}
          type="text"
          placeholder="Enter board name"
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <ButtonWrapper>
          <div onClick={() => setInputDisplay("none")}>
            <Button color={CUSTOM_STYLES.COLORS.red}>Cancel</Button>
          </div>
          <Link to={`/board/${urlBoardName}`}>
            <div onClick={() => submitAction()}>
              <Button color={CUSTOM_STYLES.COLORS.royalBlue}>
                Create board
              </Button>
            </div>
          </Link>
        </ButtonWrapper>
      </InputContainer>
    </>
  );
}

export default CreateNewBoard;

const StyledInput = styled.input`
  background-color: ${CUSTOM_STYLES.COLORS.darkestBackground};
  color: white;
  padding: 12px;
  border: none;
  border-radius: ${CUSTOM_STYLES.OTHER.borderRadius};
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: ${(props) => props.inputDisplay};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
