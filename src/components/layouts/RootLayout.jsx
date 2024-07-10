import {
  ButtonGroup,
  HStack,
  IconButton,
  Link,
  Tooltip,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";
import {
  BsGithub,
  BsLinkedin,
  BsMoon,
  BsMoonFill,
  BsSun,
  BsSunFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

const MotionHStack = motion(HStack);

function RootLayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <MotionHStack position={"relative"} placeContent={"center"} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
        <VStack
          width={{ base: "6xl", sm: "2xl", md: "4xl", lg: "6xl" }}
          
        >
          <Navbar />
          <Outlet/>
        </VStack>

        <ButtonGroup
          position={"fixed"}
          orientation="vertical"
          right={0}
          zIndex={99}
          size={"lg"}
        >
          <Tooltip label="bkfan1" placement="left">
            <Link href="https://wwww.github.com/bkfan1" isExternal>
              <IconButton icon={<BsGithub />} />
            </Link>
          </Tooltip>
          <Tooltip label="jacksonpf1" placement="left">
            <Link href="https://www.linkedin.com/in/jacksonpf1" isExternal>
              <IconButton icon={<BsLinkedin />} />
            </Link>
          </Tooltip>
        </ButtonGroup>

        <ButtonGroup
          position={"fixed"}
          right={0}
          bottom={0}
          size={"lg"}
          margin={10}
        >
          <IconButton
            icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            onClick={toggleColorMode}
          />
        </ButtonGroup>
      </MotionHStack>
    </>
  );
}

export default RootLayout;
