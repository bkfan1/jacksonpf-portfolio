import {
  Badge,
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
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({ data }) {
  const { name, description, cover_image, urls, tags } = data;
  return (
    <>
      <Card>
        <Image src={cover_image} />
        <CardBody>
          <Heading size={"md"}>{name}</Heading>
          <Text>{description}</Text>
        </CardBody>

        <CardFooter flexDirection={"column"} gap={4}>
          <Flex flexDirection={"column"} gap={2} width={"100%"}>
            <Link href={urls.code} isExternal>
              <Button leftIcon={<BsGithub />} width={{ sm: "100%" }}>
                Source code
              </Button>
            </Link>
            {urls.demo ? (
              <Link href={urls.demo} isExternal>
                <Button colorScheme="green" width={{ sm: "100%" }}>
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
