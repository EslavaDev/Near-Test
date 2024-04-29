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
  const handleSelectCity = (selectTemp?:Partial<City>) => {
    const currentCity = selectTemp ?? selected;
    if (currentCity) {
      const resolve = sortCitiesByDistance(currentCity, cities, quantity);
      setNearCity(resolve);
    }else{
      setNearCity(undefined);
    }
  };

  return {
    clean: () => {
        setSelected({});
        setNearCity(undefined);
        
    },
    selected,
    setSelected,
    handleSelectCity,
    listNearCity
  };
};
