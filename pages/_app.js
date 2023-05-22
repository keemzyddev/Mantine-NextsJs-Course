import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
