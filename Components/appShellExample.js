import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
} from "@mantine/core";
import LightDarkButton from "./lightDarkButton";
import TableExample from "../pages/tableExample";
import ChipsExample from "../pages/chipsExample";
import InputExample from "../pages/inputExample";
import Cards from "../pages/cards";
import NotificationExample from "../pages/notificationExample";
export default function AppShellExample() {
  const [activeComponent, setActiveComponent] = useState(<Cards />);
  const [active, setActive] = useState("Cards Example");
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const data = [
    {
      link: "/cards",
      label: "Cards Example",
      component: <Cards />,
    },
    {
      link: "/tableExample",
      label: "Table Example",
      component: <TableExample />,
    },
    {
      link: "/chipsExample",
      label: "Chips Example",
      component: <ChipsExample />,
    },
    {
      link: "/inputExample",
      label: "Input Example",
      component: <InputExample />,
    },
    {
      link: "/notificationExample",
      label: "Notification Example",
      component: <NotificationExample />,
    },
  ];

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      //   fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section>
            <Text>Side Bar</Text>
          </Navbar.Section>
          <Navbar.Section grow mt="lg">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {data.map((item) => (
                <NavLink
                  style={{ padding: "10px" }}
                  href={item.link}
                  key={item.label}
                  active={item.label === active}
                  label={item.label}
                  onClick={(event) => {
                    event.preventDefault();
                    setActive(item.label);
                    setActiveComponent(item.component);
                  }}
                />
              ))}
            </div>
          </Navbar.Section>
          <Navbar.Section>
            <Text>Footer</Text>
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
            <LightDarkButton />
          </div>
        </Header>
      }
    >
      {/* <TableExample /> */}
      {/* <ChipsExample />
      <InputExample /> */}
      {activeComponent}
    </AppShell>
  );
}
