'use client'
import React, { useEffect, useState } from "react";
import "./weather.css";
import Spinner from "../Spinner/Spinner"
export default function Weather(props) {
  const[loading ,setloading] =useState(true);
  const [data, setData] = useState(null);
  const [geolocationData, setGeolocationData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('kozhikode');

  useEffect(() => {
    const fetchGeolocationData = async () => {
      try {
        const options = { method: 'GET' };
        const response = await fetch('https://ipapi.co/json', options);
        const data1 = await response.json();
        console.log(data1);
        setGeolocationData(data1);

        // Set city based on geolocation data
        if (data1 && data1.city) {
          setCity(data1.city);
        }
      } catch (error) {
        console.error('Error fetching IP geolocation:', error);
        setError('Error fetching IP geolocation. Please try again.');
      }
    };

    fetchGeolocationData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // setloading(true)
      try {
     
        const url = `http://api.weatherapi.com/v1/current.json?key=f8fd58f55cdc48bc8ba204406240302&q=${city}&&aqi=no`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setloading(false)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    // Fetch weather data only when city changes
    fetchData();
  }, [city]);

  useEffect(() => {
    // This will log the updated state when it changes
    // console.log(data);
  }, [data]);

  return (<div className="mainw">
 
     { loading==true?<Spinner/>:
    <div className="wrapperw">
      <div className="wrapperw-left">
       
          <div className=" data data1">
        {data && data.current && (
          <>
            <div><img src={data.current.condition.icon}/></div>
            <div className="temp"> {data.current.temp_c} °C / {data.current.temp_f} °F</div>
            </>
            )}
            </div>
          <div className="data  data2">
           
        {data && data.current && (
          <>
            <div>Humidity: {data.current.humidity}%</div>
            <div>Wind: {data.current.wind_kph} km/h</div>
            <div>Pressure:{data.current.pressure_mb} mb</div>
            <div>Condition: {data.current.condition.text}</div>
            </>
            )}
            </div>
        
    </div>
    
    <div className="wrapperw-mid">
      <div className="mid data2">
    {data && data.location && (
      <>
      <h2>General Information:</h2>
      <div>Local Time  :  {data.location.localtime}</div>
      </>
      )}
              {data && data.current && (
                <>
                <div>Last Update : {data.current.last_updated}</div>
            <div>Feelslike : {data.current.feelslike_c} °C </div>
             <div>Feelslike : {data.current.feelslike_f} °F </div> 
            
                </>
                    )}
          </div>
      </div>
        <div className="wrapperw-right">
              <div className="location-info data2">
                {data && data.location && (
                  <>
                    <h2>Location Information:</h2>
                    <h1> </h1>
                    <ul>
                      <div>City: {data.location.name}</div>
                      <div>Region: {data.location.region}</div>
                      <div>Country: {data.location.country}</div>
                      <div>Latitude: {data.location.lat}</div>
                      <div>Longitude: {data.location.lon}</div>
                     
                      
                    </ul>
                  </>
                )}
              </div>
            </div>
    </div>
    }
    </div>
  );
}
