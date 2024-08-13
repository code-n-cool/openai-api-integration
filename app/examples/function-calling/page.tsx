"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import WeatherWidget from "../../components/weather-widget";
import { getWeather, getAvailabilty } from "../../utils";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

interface WeatherData {
  location?: string;
  temperature?: number;
  conditions?: string;
}

interface AvailableData {
  idType?: number,
  max?: number,
  min?: number,
  multiple?: number,
  name?: string,
  price?: number,
  start?: Date,
  idResource?: number,
  resourceName?: string,
  resourceTags?: [string],
  tags?: [string],
}

const FunctionCalling = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [availableData, setAvailableData] = useState<AvailableData>({});
  const isEmpty = Object.keys(weatherData).length === 0;

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    const fetchData = async (dataFetcher, dataSetter) => {
      const args = JSON.parse(call.function.arguments);
      const data = await dataFetcher(args);
      console.log("datafectcher", data)
      dataSetter(data);
      return JSON.stringify(data);
    };  
    
    if (call?.function?.name === "get_weather") {
      return fetchData(getWeather, setWeatherData);
    } else if (call?.function?.name === "search_availability") {
      return fetchData(getAvailabilty, setAvailableData);
    }
    
    return;
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <WeatherWidget
            location={weatherData.location || "---"}
            temperature={weatherData.temperature?.toString() || "---"}
            conditions={weatherData.conditions || "Sunny"}
            isEmpty={isEmpty}
          />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat functionCallHandler={functionCallHandler} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
