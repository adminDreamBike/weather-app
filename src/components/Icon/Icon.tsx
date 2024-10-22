import { BsCloudsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa6";
import { BsCloudSleetFill } from "react-icons/bs";
import { Grid, Icon as IconChakra } from "@chakra-ui/react";

const getIconWeather = (iconName, size = 20) => {
  switch (iconName) {
    case "Clouds":
      return <IconChakra as={BsCloudsFill} boxSize={size} color="white" />;
    case "Rain":
      return <IconChakra as={FaCloudRain} boxSize={size} color="white" />;
    case "Sleet":
      return <IconChakra as={BsCloudSleetFill} boxSize={size} color="white" />;
    case "Sunny":
      return <IconChakra as={IoMdSunny} boxSize={size} color="white" />;
    default:
      break;
  }
};
export const Icon = ({ main, size }) => {
  return <Grid>{getIconWeather(main, size)}</Grid>;
};
