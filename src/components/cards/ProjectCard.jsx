import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  BsCode,
  BsCodeSlash,
  BsGithub,
  BsPlayCircleFill,
} from "react-icons/bs";
import ProjectImagePlaceHolder from "../misc/ProjectImagePlaceHolder";

export default function ProjectCard({ data }) {
  const { name, description, cover_image, urls, tags } = data;
  return (
    <>
      <Card
        _hover={{
          shadow: "xl",
        }}
      >
        <CardHeader height={"xs"}>
          {cover_image ? (
            <Image
              src={`${cover_image}`}
              height="100%"
              objectFit={"contain"}
              alt={`Picture of project: ${name}`}
            />
          ) : (
            <>
              <ProjectImagePlaceHolder />
            </>
          )}
        </CardHeader>
        <CardBody>
          <Heading size={"md"} textAlign={{ base: "center", sm: "left" }}>
            {name}
          </Heading>
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
                <Button
                  leftIcon={<BsPlayCircleFill />}
                  colorScheme="green"
                  width={{ base: "100%" }}
                >
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
