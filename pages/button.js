import { Button } from "@mantine/core";
import { IconMoon } from "@tabler/icons-react";
import { useState } from "react";

export default function MantineButton() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div>
      <Button
        leftIcon={<IconMoon />}
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        Orange red
      </Button>
      <Button
        loading={loading}
        onClick={handleClick}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        Indigo cyan
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
      >
        Lime green
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
      >
        Teal blue
      </Button>

      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        Peach
      </Button>
    </div>
  );
}
