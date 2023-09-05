import { ChakraProvider } from "@chakra-ui/react";

import useIsMounted from "./hooks/useIsMounted";

import LoadingScreen from "./components/misc/LoadingScreen";
import PortfolioApp from "./components/PortfolioApp";

function App() {
  const { isMounted } = useIsMounted();

  return (
    <>
      <ChakraProvider>
        {isMounted ? (
          <>
            <PortfolioApp />
          </>
        ) : (
          <>
            <LoadingScreen />
          </>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
