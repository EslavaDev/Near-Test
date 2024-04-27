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


export const sortByDistance = (
    citySelected: Partial<City>,
    cities: City[],
    quantity: number
  ) => {
    return cities
      .sort((a, b) => {
        const distanceA = calculateDistance(
          Number(citySelected.lat),
          Number(citySelected.lng),
          Number(a.lat),
          Number(a.lng)
        );
        const distanceB = calculateDistance(
          Number(citySelected.lat),
          Number(citySelected.lng),
          Number(b.lat),
          Number(b.lng)
        );

        return distanceA - distanceB;
      })
      .slice(0, quantity);
  };
