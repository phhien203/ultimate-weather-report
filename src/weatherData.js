const data = [
  {
    city: "Amsterdam",
    temp: 299.15,
  },
  {
    city: "Berlin",
    temp: 295.15,
  },
  {
    city: "Hanoi",
    temp: 301.25,
  },
  {
    city: "New York",
    temp: 301.75,
  },
];

export const weatherData = (scale) => {
  switch (scale) {
    case "celsius":
      return data.map(({ city, temp }) => ({
        city,
        temp: (temp - 273.15).toFixed(2),
      }));
    case "fahrenheit":
      return data.map(({ city, temp }) => ({
        city,
        temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
      }));
    case "kevin":
    default:
      return data;
  }
};
