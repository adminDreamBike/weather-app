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
import { useToast } from "@chakra-ui/react";
import {
  Map,
  useApiLoadingStatus,
  APILoadingStatus,
} from "@vis.gl/react-google-maps";

export default function Home() {
  const { name } = useContext(CityContext);
  const [nameCity, setNameCity] = useState(name);
  const { location, refetch, isError, error } = useLocation(name);
  const { setLocation, location: locationStore = [] } = usePersistStore(
    useLocationStore,
    (state) => state
  ) || { location: [], setLocation: () => null };
  const { setWeather, weather } = useWeatherStore();

  const { lat = 0, lon = 0 } = locationStore[0] || {};
  const { data, isLoading, refetchWeather } = useWeather({
    lat: lat,
    lon: lon,
  });
  const [latitude, setLatitude] = useState(lat);

  const { daily } = data || {};
  const toast = useToast();
  const status = useApiLoadingStatus();
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 lg:px-64">
      <header></header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {status === APILoadingStatus.LOADING && <Spinner size="lg" />}
        <Map
          style={{ width: "70vw", height: "50vh" }}
          defaultCenter={{ lat: lat, lng: lon }}
          defaultZoom={12}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          key={lat}
        />
        <Flex gap="12px" flexWrap="wrap">
          {isLoading && <Spinner size="xl" />}
          {daily?.map((item: Daily) => {
            return <DailyCard daily={item} key={item.dt} />;
          })}
        </Flex>
        {isLoading && <Skeleton height="20px" />}
        <HighlightList data={weather} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      {isError &&
        toast({ title: "An Error has occured", description: `${error}` })}
      {location?.length === 0 &&
        toast({
          title: "No city was founded",
          description: `${name} was found. Try with another one!!!`,
        })}
    </div>
  );
}
