import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../api/notificationApi";
import { getTopNotifications } from "../utils/prioritySorter";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchPriorityNotifications();
  }, []);

  async function fetchPriorityNotifications() {
    const data = await getNotifications();

    if (!data || !data.notifications) {
  return;
}
    const topNotifications =
      getTopNotifications(
        data.notifications,
        10
      );

    setNotifications(topNotifications);
  }

  return (
    <>
      <Navbar />

      <h1>Priority Notifications</h1>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}

export default PriorityNotifications;