import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./component/ThemeSwitcher";
import { NotificationProvider } from "./context/NotificationContext";
import AddNotification from "./component/AddNotification";
import NotificationList from "./component/NotificationList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div>
        <h1> Context API</h1>
      </div>
      <ThemeSwitcher />
      <NotificationProvider>
        <AddNotification />
        <NotificationList />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
