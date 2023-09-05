import {
  Box,
  Highlight,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
} from "@chakra-ui/react";
import { BsAwardFill, BsFillGearFill } from "react-icons/bs";

export default function TimelineStepper({ timelineData, type }) {
  
  const stepIcon = type === "work" ? <BsFillGearFill/> : type === "education" ? <BsAwardFill/> : ""

  return (
    <>
      <Stepper orientation="vertical" width={"100%"}>
        {timelineData.map(({ id, place, title, date, description }) => (
          <Step key={id}>
            <StepIndicator>
              <StepStatus incomplete={""} active={stepIcon} />
            </StepIndicator>

            <Box flexShrink={"0"}>
              <StepTitle>
                <Text
                  width={{ base: "44", sm: "xs", md: "md", lg: "2xl" }}
                  textAlign={"left"}
                >
                  <Highlight query={title} styles={{ fontWeight: "bold" }}>
                    {`${title} - ${place}`}
                  </Highlight>
                </Text>
              </StepTitle>
              <Text color={"gray"} fontSize={"sm"} my={1} textAlign={"left"}>
                {date}
              </Text>
              <StepDescription>
                <Text
                  width={{ base: "44", sm: "xs", md: "md", lg: "2xl" }}
                  color={"black"}
                  textAlign={"left"}
                >
                  {description}
                </Text>
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
}
