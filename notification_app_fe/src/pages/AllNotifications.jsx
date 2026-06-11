import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../api/notificationApi";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  async function fetchNotifications() {
    try {
      const data = await getNotifications();

      console.log(data);

      if (data && data.notifications) {
        setNotifications(data.notifications);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <h1>All Notifications</h1>

      <h3>Total: {notifications.length}</h3>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}

export default AllNotifications;