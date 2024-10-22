import { getWeather } from "@/services/weather";
import { useQuery } from "@tanstack/react-query";

export const useWeather = ({ lat = 6.2443382, lon = -75.573553 }) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: lat, lon: lon }),
  });

  return { data, isLoading, isError, error, refetchWeather: refetch };
};
