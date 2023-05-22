import { Select, TextInput } from "@mantine/core";
import { IconPassword, IconEye } from "@tabler/icons-react";

export default function InputExample() {
  return (
    <>
      <TextInput
        icon={<IconPassword />}
        placeholder="Your name"
        rightSection={<IconEye />}
        label="Password"
      />
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </>
  );
}
