
import {
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react"


import Router from "./routes/Router";
import customTheme from "./utils/theme";


export const App = () => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
     <Router />
  </ChakraProvider>
)
