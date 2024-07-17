import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import AboutPage from "./components/pages/AboutPage";
import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./components/layouts/RootLayout";
import theme from "./theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
