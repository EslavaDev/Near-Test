import { City } from "../../types/City";

export const calculateDistance = (
  x1: number,
  x2: number,
  y1: number,
  y2: number
) => {
  const x = x2 - x1;
  const y = y2 - y1;

  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  return distance;
};


export const sortCitiesByDistance = (
    citySelected: Partial<City>,
    cities: City[],
    quantity: number
  ) => {
    const sorted = cities
      .sort((a, b) => {
        const distanceA = calculateDistance(
          Number(citySelected.lat),
          Number(a.lat),
          Number(citySelected.lng),
          Number(a.lng)
        );
        const distanceB = calculateDistance(
          Number(citySelected.lat),
          Number(b.lat),
          Number(citySelected.lng),
          Number(b.lng)
        );

        return    distanceA - distanceB
      })
      .slice(0, quantity);
      return sorted;
      
  };
