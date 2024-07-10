import { Button, Flex, Stack, StackItem, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const pages = [
  { id: nanoid(), text: "Home", route: "/" },
  { id: nanoid(), text: "Portfolio", route: "/portfolio" },
  { id: nanoid(), text: "About", route: "/about" },
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
          {pages.map(({ id, text, route }) => (
            <StackItem key={id}>
              <NavLink to={route}>
                {({ isActive, isPending, isTransitioning }) => (
                  <Text as={isActive ? "u" : ""} textUnderlineOffset={8}>{text}</Text>
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
