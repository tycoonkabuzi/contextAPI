import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState([]);
  const addNotification = (message) => {
    setNotification((prevNotification) => [
      ...prevNotification,
      { id: Date.now(), message },
    ]);
  };
  const removeNotification = (id) => {
    setNotification((prevNotification) =>
      prevNotification.filter((n) => n.id !== id)
    );
  };
  return (
    <NotificationContext.Provider
      value={{ notification, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
export const useNotification = () => useContext(NotificationContext);
