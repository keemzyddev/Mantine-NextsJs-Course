import { Chip, Group } from "@mantine/core";
import { useEffect, useState } from "react";

export default function ChipsExample() {
  const [value, setValue] = useState(["react"]);

  useEffect(() => {
    console.log(value);
  });
  return (
    <>
      <Chip.Group multiple value={value} onChange={setValue}>
        <Group position="center" mt="md">
          <Chip
            value="react"
            color="pink"
            variant="filled"
            size="md"
            radius="xs"
          >
            React
          </Chip>
          <Chip
            value="next"
            color="pink"
            variant="filled"
            size="md"
            radius="xs"
          >
            Next
          </Chip>
          <Chip
            value="Mantine"
            color="pink"
            variant="filled"
            size="md"
            radius="xs"
          >
            Mantine
          </Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
