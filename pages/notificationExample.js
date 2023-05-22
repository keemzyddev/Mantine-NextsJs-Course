import { Group, Button, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { IconChecklist } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function NotificationExample() {
  const [randomPlayer, setRandomPlayer] = useState({ email: "" });

  const getPlayerName = () => {
    // axios.get("https://www.balldontlie.io/api/v1/players/237").then((res) => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      setRandomPlayer(res.data);
      notifications.show({
        message: "Hey there, your code is awesome! 🤥",
        title: "Default notification",
        color: "green",
        icon: <IconChecklist />,
      });
    });
  };

  useEffect(() => {
    randomPlayer;
  });
  return (
    <Group
      position="center"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Button
        variant="outline"
        onClick={() => {
          notifications.show({
            title: "Default notification",
            message: "Hey there, your notification is awesome! ",
          });
          getPlayerName();
        }}
      >
        Show data
      </Button>

      <Text>{randomPlayer.email}</Text>
    </Group>
  );
}
