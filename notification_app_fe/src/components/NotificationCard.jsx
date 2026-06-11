function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>{notification.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;