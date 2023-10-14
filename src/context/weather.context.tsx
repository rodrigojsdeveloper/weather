"use client";
import { IChildren, IWeatherContextData } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import getWeatherByCity from "@/services/getWeatherByCity";

const WeatherContext = createContext({} as IWeatherContextData);

const WeatherContextProvider = ({ children }: IChildren) => {
  const isBrowser = typeof window !== "undefined";

  const cityFromLocalStorage = isBrowser
    ? localStorage.getItem("iWeather: city")
    : null;

  const [weather, setWeather] = useState<any>();

  const [city, setCity] = useState<any>(
    isBrowser && cityFromLocalStorage ? JSON.parse(cityFromLocalStorage) : null
  );

  const [nextDays, setNextDays] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const weatherData = await getWeatherByCity({ lat, lon, setIsLoading });
      setWeather(weatherData.today);
      setCity((prevCity: any) => ({
        ...prevCity,
        weatherToday: weatherData?.today?.weather,
      }));
      setNextDays(weatherData.nextDays);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cityFromLocalStorage) {
      fetchWeatherData(city?.coord?.lat, city?.coord?.lon);
    }
  }, [city?.coord, cityFromLocalStorage]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        weather,
        nextDays,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
