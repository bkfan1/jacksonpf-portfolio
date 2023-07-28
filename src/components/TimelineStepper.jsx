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

export default function TimelineStepper({ timelineData }) {
  return (
    <>
      <Stepper orientation="vertical" width={"100%"}>
        {timelineData.map(({ id, place, title, date, description, icon }) => (
          <Step key={id}>
            <StepIndicator>
              <StepStatus incomplete={""} active={icon} />
            </StepIndicator>

            <Box flexShrink={"0"}>
              <StepTitle>
                <Text width={{base:"44",sm:"xs", md:"md", lg:"2xl"}}>
                  <Highlight query={title} styles={{ fontWeight: "bold" }}>
                    {`${title} - ${place}`}
                  </Highlight>
                </Text>
              </StepTitle>
              <Text color={"gray"} fontSize={"sm"} my={1}>
                {date}
              </Text>
              <StepDescription>
                <Text width={{base:"44",sm:"xs", md:"md", lg:"2xl"}} color={"black"}>
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
