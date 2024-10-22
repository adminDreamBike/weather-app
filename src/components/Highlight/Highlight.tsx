import { CardBody, Card, Text, Box, Progress, Icon } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa6";

export const Highlight = ({
  title,
  value,
  units,
  progress,
  wind_deg,
}: {
  title: string;
  value: number;
  units: string;
  progress?: number;
  wind_deg?: number;
}) => {
  return (
    <Card background="#1e213a" w="52">
      <CardBody
        color="#e4e4e8"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text textAlign="center" fontSize="small">
          {title}
        </Text>
        <Box p="4" display="flex" flexDirection="row" py="2">
          <Text fontSize="4xl">{value}</Text>
          <Text fontSize="medium" alignContent="center">
            {units}
          </Text>
        </Box>
        {progress && <Progress value={progress} width="100px" size="sm" />}
        {wind_deg && (
          <Icon
            as={FaLocationArrow}
            style={{ transform: `rotate(${wind_deg}deg)` }}
          />
        )}
      </CardBody>
    </Card>
  );
};
