import { FiX } from "react-icons/fi";

function DeleteItem({ item, handleDelete }) {
  return (
    <>
      <FiX
        onClick={() => handleDelete(item)}
        style={{ color: "red", cursor: "pointer", fontSize: "30px" }}
      />
    </>
  );
}

export default DeleteItem;
