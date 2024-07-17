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
import { useTranslation } from "react-i18next";
import { BsAwardFill, BsFillGearFill } from "react-icons/bs";

function TimelineStepper({ type }) {
  const {t} = useTranslation();
  const stepIcon =
    type === "work" ? (
      <BsFillGearFill />
    ) : type === "education" ? (
      <BsAwardFill />
    ) : (
      ""
    );

  const timelineData = t(`${type === "work" ? "experience" : type}`, { returnObjects: true });

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
                  {`${title} - ${place}`}
                </Text>
              </StepTitle>
              <Text fontSize={"sm"} my={1} textAlign={"left"} opacity={0.6}>
                {date}
              </Text>
              <StepDescription>
                <Text
                  width={{ base: "44", sm: "xs", md: "md", lg: "2xl" }}
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

export default TimelineStepper;
