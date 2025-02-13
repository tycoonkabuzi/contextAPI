import { useRef } from "react";
import { useNotification } from "../context/NotificationContext";

const AddNotification = () => {
  const { addNotification, notification } = useNotification();
  const refInput = useRef();

  return (
    <>
      <input
        type="text"
        onChange={(e) => (refInput.current = e.target.value)}
      />{" "}
      <button onClick={() => addNotification(refInput.current)}>Add</button>
    </>
  );
};
export default AddNotification;
