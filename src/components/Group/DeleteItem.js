import { FiX } from "react-icons/fi";

function DeleteItem({ item, handleDelete }) {
  return (
    <>
      <FiX
        onClick={() => handleDelete(item)}
        style={{
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
        }}
      />
    </>
  );
}

export default DeleteItem;
