"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Highlight } from "@/components/Highlight/Highlight";

export const HighlightList = ({ data }) => {
  const { current } = data || {};

  return (
    <>
      <Text color="#e4e4e8">Todays Highglights</Text>
      <Flex gap="20px">
        <Highlight
          title="Wind Status"
          value={current?.wind_speed}
          units="mph"
          wind_deg={current.wind_deg}
        />
        <Highlight
          title="Humidity"
          value={current?.humidity}
          units="%"
          progress={current?.humidity}
        />
        <Highlight
          title="Visibility"
          value={current?.visibility}
          units="miles"
        />
        <Highlight title="Air Pressure" value={current?.pressure} units="mb" />
      </Flex>
    </>
  );
};
