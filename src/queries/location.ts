import { searchLocations } from "@/services/weather";
import { useQuery } from "@tanstack/react-query";

export const useLocation = (cityName = "Medellin") => {
  const { data, refetch } = useQuery({
    queryKey: ["location"],
    queryFn: () => searchLocations(cityName),
  });

  return { location: data, refetch };
};
