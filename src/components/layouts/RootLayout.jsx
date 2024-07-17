import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";

import SocialMediaFloatingMenu from "../menus/SocialMediaFloatingMenu";
import SwitchLanguageButton from "../buttons/SwitchLanguageButton";

function RootLayout() {
  return (
    <>
      <HStack placeContent={"center"} minHeight={"100vh"} position={"relative"}>
        <VStack
          width={{ base: "6xl", sm: "2xl", md: "4xl", lg: "6xl" }}
          alignSelf={"start"}
        >
          <Navbar />
          <Outlet />
        </VStack>

        <SocialMediaFloatingMenu />

        <SwitchLanguageButton />
      </HStack>
    </>
  );
}

export default RootLayout;
