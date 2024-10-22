"use client";

import { convertKelvinToCelsius, getDate } from "@/libs/utils";
import { useLocationStore } from "@/store/location";
import { useWeatherStore } from "@/store/weather";
import {
  Box,
  BoxProps,
  Drawer,
  DrawerContent,
  Flex,
  useColorModeValue,
  useDisclosure,
  Text,
  Icon as IconChakra,
  Input,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { Icon } from "../Icon/Icon";
import { CityContext } from "@/context/city";
import usePersistStore from "@/hooks/usePersistStore";
import { useContext } from "react";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { setName } = useContext(CityContext);
  const location =
    usePersistStore(useLocationStore, (state) => state.location) || [];
  const weather = usePersistStore(useWeatherStore, (state) => state.weather);
  const { name } = location[0] || {};
  const { current } = weather || {};
  const { weather: currentWeather = [] } = current || {};
  const { main } = currentWeather[0] || {};

  const handleSearchWeather = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      setName(event.currentTarget.value);
    }
  };
  return (
    <Box
      bg="#1e213a"
      borderRight="1px"
      borderRightColor="#1e213a"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        flexDirection="column"
        my="10"
        height="full"
      >
        <Input
          placeholder="Search for places"
          height="30px"
          color="white"
          onKeyDown={handleSearchWeather}
          spellCheck={true}
        />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="40vh"
          alignItems="center"
          my="8"
        >
          <Icon main={main} size={20} />
          <Text color="#9ea6bf" fontSize="xxx-large" fontWeight="bold">
            {convertKelvinToCelsius(current?.temp)}
            <Text as="sup" fontWeight="normal">
              c
            </Text>
          </Text>
          <Text color="#9ea6bf" fontSize="x-large">
            {main}
          </Text>
          <Flex flexDirection="row" gap="5">
            <Text color="#9ea6bf">Today </Text>
            <Text color="#9ea6bf">{getDate()}</Text>
          </Flex>
          <Flex flexDirection="row" gap="2">
            <IconChakra as={IoLocationSharp} w={5} h={5} color="#a8a7b8" />
            <Text color="#88879a">{name}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export const Sidebar = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
