import {
  calculateDistance,
  sortCitiesByDistance,
} from "../../src/tools/math/distance";

describe("Calculate Distances", () => {
  test("calculate distance of a point to other", () => {
    const x = 0;
    const y = 0;

    const x1 = 0;
    const y1 = 1;

    expect(calculateDistance(x, x1, y, y1)).toBe(1);
  });

  test("calculate distance of a point to other", () => {
    const x = 1;
    const y = 0;

    const x1 = 1;
    const y1 = 1;

    expect(calculateDistance(x, x1, y, y1)).toBe(1);
  });

  test("wrong distance of a point to other", () => {
    const x = 0;
    const y = 0;

    const x1 = 0;
    const y1 = 0;

    expect(calculateDistance(x, x1, y, y1)).not.toBe(1);
  });
});

describe("sort Mock cities Array about distances", () => {
  const cities = [
    {
      country: "US",
      name: "Bay Minette",
      lat: "30",
      lng: "-87",
    },
    {
      country: "CA",
      name: "Toronto",
      lat: "43",
      lng: "-79",
    },
    {
      country: "AU",
      name: "Sydney",
      lat: "-33",
      lng: "151",
    },
    {
      country: "GB",
      name: "London",
      lat: "51",
      lng: "0",
    },
    {
      country: "JP",
      name: "Tokyo",
      lat: "35",
      lng: "139",
    },
  ];

  test("sort near three cities more near to tokyo", () => {
    expect(
      sortCitiesByDistance(cities[4], cities.slice(0, 3), 3)
    ).toStrictEqual([
      {
        country: "AU",
        name: "Sydney",
        lat: "-33",
        lng: "151",
      },
      {
        country: "CA",
        name: "Toronto",
        lat: "43",
        lng: "-79",
      },
      {
        country: "US",
        name: "Bay Minette",
        lat: "30",
        lng: "-87",
      },
    ]);
  });

  test("Worng sort near three cities more near to tokyo", () => {
    expect(
      sortCitiesByDistance(cities[4], cities.slice(0, 3), 3)
    ).not.toStrictEqual([
      {
        country: "US",
        name: "Bay Minette",
        lat: "30",
        lng: "-87",
      },
      {
        country: "AU",
        name: "Sydney",
        lat: "-33",
        lng: "151",
      },
      {
        country: "CA",
        name: "Toronto",
        lat: "43",
        lng: "-79",
      },
    ]);
  });

  test("Worng sort near three cities more near to London", () => {
    expect(
      sortCitiesByDistance(
        cities[3],
        cities.slice(0, 3).concat(cities.slice(3 + 1)),
        3
      )
    ).not.toStrictEqual([
      {
        country: "US",
        name: "Bay Minette",
        lat: "30",
        lng: "-87",
      },
      {
        country: "AU",
        name: "Sydney",
        lat: "-33",
        lng: "151",
      },
      {
        country: "CA",
        name: "Toronto",
        lat: "43",
        lng: "-79",
      },
    ]);
  });
});
