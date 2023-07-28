import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BsGithub, BsPlayCircleFill } from "react-icons/bs";

export default function ProjectCard({ data }) {
  const { name, description, cover_image, urls, tags } = data;
  return (
    <>
      <Card _hover={{
        shadow:"xl"
      }}>
        <Image src={cover_image} />
        <CardBody>
          <Heading size={"md"}>{name}</Heading>
          <Text textAlign={"justify"}>{description}</Text>
        </CardBody>

        <CardFooter flexDirection={"column"} gap={4}>
          <Flex flexDirection={"column"} gap={2} width={"100%"}>
            <Link href={urls.code} isExternal>
              <Button leftIcon={<BsGithub />} width={{ base: "100%" }}>
                Source code
              </Button>
            </Link>
            {urls.demo ? (
              <Link href={urls.demo} isExternal>
                <Button leftIcon={<BsPlayCircleFill/>}  colorScheme="green" width={{ base: "100%" }}>
                  Live demo
                </Button>
              </Link>
            ) : (
              ""
            )}
          </Flex>
          <HStack>
            {tags.map((tag) => (
              <Tag
                key={tag.id}
                fontWeight={"bold"}
                colorScheme={tag.colorScheme}
              >
                {tag.name}
              </Tag>
            ))}
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}
