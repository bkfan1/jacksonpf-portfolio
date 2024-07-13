import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SocialMediaFloatingMenu() {
  return (
    <>
      <ButtonGroup
        position={"fixed"}
        orientation="vertical"
        right={0}
        zIndex={99}
        size={"lg"}
      >
        <Tooltip label="bkfan1" placement="left">
          <Link href="https://wwww.github.com/bkfan1" isExternal>
            <IconButton icon={<BsGithub />}  />
          </Link>
        </Tooltip>
        <Tooltip label="jacksonpf1" placement="left">
          <Link href="https://www.linkedin.com/in/jacksonpf1" isExternal>
            <IconButton icon={<BsLinkedin />}  />
          </Link>
        </Tooltip>
      </ButtonGroup>
    </>
  );
}
