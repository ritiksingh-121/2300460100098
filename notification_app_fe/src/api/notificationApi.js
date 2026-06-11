import axios from "axios";

export const getNotifications = async () => {
    console.log("TOKEN:", import.meta.env.VITE_ACCESS_TOKEN);
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};