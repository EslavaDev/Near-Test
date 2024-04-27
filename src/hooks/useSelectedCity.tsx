import { useState } from "react";
import { sortByDistance } from "../tools/math/distance";
import { City } from "../types/City";

interface Props {
  quantity: number;
  cities: City[];
}

export const useSelectedCountry = ({ quantity, cities }: Props) => {
  const [selected, setSelected] = useState<Partial<City>>();
  const handleSelectCity = () => {
    if (selected) {
      const resolve = sortByDistance(selected, cities, quantity);

      return resolve;
    }
  };

  return {
    selected,
    setSelected,
    handleSelectCity,
  };
};
