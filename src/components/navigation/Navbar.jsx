import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import {
  BsBriefcase,
  BsBriefcaseFill,
  BsHouse,
  BsHouseFill,
  BsInfoCircle,
  BsInfoCircleFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const pages = [
  {
    id: nanoid(),
    text: "Home",
    route: "/",
    icon: { normal: BsHouse, active: BsHouseFill },
  },
  {
    id: nanoid(),
    text: "Portfolio",
    route: "/portfolio",
    icon: { normal: BsBriefcase, active: BsBriefcaseFill },
  },
  {
    id: nanoid(),
    text: "About",
    route: "/about",
    icon: { normal: BsInfoCircle, active: BsInfoCircleFill },
  },
];

function Navbar() {
  return (
    <>
      <Flex
        id="navbar"
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        paddingX={10}
        paddingY={6}
      >
        <Stack id="navbar_menu" direction={"row"} align={"center"} gap={10}>
          {pages.map(({ id, text, route, icon }) => (
            <StackItem key={id}>
              <NavLink to={route}>
                {({ isActive, isPending, isTransitioning }) => (
                  <HStack fontSize={"large"}>
                    <Icon as={isActive ? icon.active : icon.normal} />
                    <Text
                      as={isActive ? "u" : ""}
                      fontWeight={isActive ? "600" : ""}
                      textUnderlineOffset={8}
                    >
                      {text}
                    </Text>
                  </HStack>
                )}
              </NavLink>
            </StackItem>
          ))}
        </Stack>

        <StackItem>
          <NavLink to="/contact">
            <Button size={"lg"}>Contact Me</Button>
          </NavLink>
        </StackItem>
      </Flex>
    </>
  );
}

export default Navbar;
