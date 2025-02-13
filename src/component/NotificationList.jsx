import { useNotification } from "../context/NotificationContext";

const NotificationList = () => {
  const { notification, removeNotification } = useNotification();
  return (
    <div>
      {notification.map((notification) => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          <button onClick={() => removeNotification(notification.id)}>
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
