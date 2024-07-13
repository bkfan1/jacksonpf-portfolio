import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";

import { motion } from "framer-motion";
import SocialMediaFloatingMenu from "../menus/SocialMediaFloatingMenu";

const MotionHStack = motion(HStack);

function RootLayout() {
  return (
    <>
      <MotionHStack
        placeContent={"center"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        minHeight={"100vh"}
      >
        <VStack
          width={{ base: "6xl", sm: "2xl", md: "4xl", lg: "6xl" }}
          alignSelf={"start"}
        >
          <Navbar />
          <Outlet />
        </VStack>

        <SocialMediaFloatingMenu />
      </MotionHStack>
    </>
  );
}

export default RootLayout;
