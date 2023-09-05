import {
  Divider,
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import HomeHero from "./misc/HomeHero";

import AboutTab from "./tabs/AboutTab";
import PortfolioTab from "./tabs/PortfolioTab";
import ContactTab from "./tabs/ContactTab";

import Footer from "./navigation/Footer";

import { BsBriefcaseFill, BsHouseFill, BsJournalBookmarkFill, BsPersonVcardFill } from "react-icons/bs";

export default function PortfolioApp() {
  return (
    <>
      <Tabs align={"end"} variant={"enclosed"}>
        <TabList px={2} pt={2}>
          <Tab>
            <Icon as={BsHouseFill} />
            <Text display={{ base: "none", md: "flex" }} ml={2}>
              Home
            </Text>
          </Tab>
          <Tab>
            <Icon as={BsPersonVcardFill} />
            <Text display={{ base: "none", md: "flex" }} ml={2}>
              About
            </Text>
          </Tab>
          <Tab>
            <Icon as={BsBriefcaseFill} />
            <Text display={{ base: "none", md: "flex" }} ml={2}>
              Portfolio
            </Text>
          </Tab>
          <Tab>
            <Icon as={BsJournalBookmarkFill} />
            <Text display={{ base: "none", md: "flex" }} ml={2}>
              Contact
            </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            backgroundImage={`url(/polygon.svg)`}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
          >
            <Flex minHeight={"100vh"} justifyContent={"center"}>
              <HomeHero />
            </Flex>
          </TabPanel>
          <TabPanel>
            <AboutTab />
          </TabPanel>
          <TabPanel>
            <PortfolioTab />
          </TabPanel>
          <TabPanel>
            <ContactTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Divider />
      <Footer />
    </>
  );
}
