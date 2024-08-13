const getWeather = (location) => {
  // chose a random temperature and condition
  const randomTemperature = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
  const randomConditionIndex = Math.floor(Math.random() * 5);
  const conditions = ["Cloudy", "Sunny", "Rainy", "Snowy", "Windy"];

  return {
    location: location,
    temperature: randomTemperature,
    unit: "F",
    conditions: conditions[randomConditionIndex],
  };
};

const getAvailabilty = async (date) => {
  const res = await fetch(`https://66b357b77fba54a5b7ec89d3.mockapi.io/api/v1/availabilities`, {
    method: "GET",
    redirect: "follow"
  })

  const data = await res.json();
  return data;
}

export { getWeather, getAvailabilty };
