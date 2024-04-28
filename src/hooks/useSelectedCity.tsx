import { useState } from "react";
import { sortCitiesByDistance } from "../tools/math/distance";
import { City } from "../types/City";

interface Props {
  quantity: number;
  cities: City[];
}

export const useSelectedCountry = ({ quantity, cities }: Props) => {
  const [selected, setSelected] = useState<Partial<City>>();
  const [listNearCity,setNearCity] = useState<City[]>();
  const handleSelectCity = () => {
    if (selected) {
      const resolve = sortCitiesByDistance(selected, cities, quantity);
      setNearCity(resolve);
    }
  };

  return {
    selected,
    setSelected,
    handleSelectCity,
    listNearCity
  };
};
