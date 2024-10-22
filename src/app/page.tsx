"use client";
import { HighlightList } from "@/components/HighlightList/HighlightList";
import { Icon } from "@/components/Icon/Icon";
import { CityContext } from "@/context/city";
import usePersistStore from "@/hooks/usePersistStore";
import { convertKelvinToCelsius, getDate } from "@/libs/utils";
import { useLocation } from "@/queries/location";
import { useWeather } from "@/queries/weather";
import { useLocationStore } from "@/store/location";
import { useWeatherStore } from "@/store/weather";
import { Daily } from "@/types";
import {
  Card,
  CardBody,
  Flex,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { name } = useContext(CityContext);
  const [nameCity, setNameCity] = useState(name);
  const { location, refetch } = useLocation(name);
  const { setLocation, location: locationStore = [] } = usePersistStore(
    useLocationStore,
    (state) => state
  ) || { location: [], setLocation: () => null };
  const { setWeather, weather } = useWeatherStore();

  const { lat, lon } = locationStore[0] || {};
  const { data, isLoading, refetchWeather } = useWeather({
    lat: lat,
    lon: lon,
  });
  const [latitude, setLatitude] = useState(lat);

  const { daily } = data || {};

  useEffect(() => {
    setNameCity(name);

    if (name !== nameCity) {
      refetch();
    }
  }, [name, nameCity, refetch, refetchWeather]);
  useEffect(() => {
    setLatitude(lat);
    if (latitude !== lat) {
      refetchWeather();
    }
  }, [lat, latitude, refetchWeather]);
  useEffect(() => {
    if (location) {
      setLocation(location);
    }
  }, [location, setLocation]);

  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data, setWeather]);

  const DailyCard = ({ daily }: { daily: Daily }) => {
    const { weather, temp } = daily;
    const { max, min } = temp;

    return (
      <Card background="#1e213a" w="32" h="40">
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text color="#999a9f" fontSize="small">
            {getDate()}
          </Text>
          <Icon main={weather[0]?.main} size={8} />
          <Flex width="full" justifyContent="space-around">
            <Text color="#999a9f" fontSize="small">
              {convertKelvinToCelsius(max)}
              <Text as="sup">o</Text>
            </Text>
            <Text color="#5a5b70" fontSize="small">
              {convertKelvinToCelsius(min)}
              <Text as="sup">o</Text>
            </Text>
          </Flex>
        </CardBody>
      </Card>
    );
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 sm:p-64">
      <header></header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Flex gap="12px">
          {isLoading && <Spinner size="xl" />}
          {daily?.map((item: Daily) => {
            return <DailyCard daily={item} key={item.dt} />;
          })}
        </Flex>
        {isLoading && <Skeleton height="20px" />}
        <HighlightList data={weather} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
