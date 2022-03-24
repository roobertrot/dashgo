import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawercontext";
import { makeServer } from "../services/mirage";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default MyApp;
