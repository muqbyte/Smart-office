import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import TemperatureLogo from '../assets/temperature.png'
import HumidityLogo from '../assets/humidity.png'
import CarbonDioxide from '../assets/carbonDioxide.png'
import smallPm from '../assets/pm25.png'
import bigPm from '../assets/pm10.png'
import voc from '../assets/voc.png'

const ComponentC = () => {
  const [IaqData, setIaqData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://nr.txio.live/ambience/now');
      const jsonData = await response.json();
      const firstDataPoint = jsonData[0];
      console.log(firstDataPoint);
      setIaqData(firstDataPoint);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Automatically fetch data when the component mounts
  }, []);

  return (
    <div>
      
      {IaqData ? (
        <div className="flex flex-col" style={{  margin: "0 50px" }}>
          <div className="flex flex-row p-10">
            <DataComponent valueLevel={IaqData.TMP} unit="°C" iconLogo={TemperatureLogo} parameter="Temperature" />
            <DataComponent valueLevel={IaqData.RH} unit="%" iconLogo={HumidityLogo} parameter="Humidity" />
            <DataComponent valueLevel={IaqData.CO2} unit="ppm" iconLogo={CarbonDioxide} parameter="Carbon Dioxide" />
          </div>
          <div className="flex flex-row p-10">
            <DataComponent valueLevel={IaqData.PM25} unit="µg/m3" iconLogo={smallPm} parameter="Particle Matter 2.5" />
            <DataComponent valueLevel={IaqData.PM10} unit="µg/m3" iconLogo={bigPm} parameter="Particle Matter 10" />
            <DataComponent valueLevel={IaqData.TVOC} unit="ppb" iconLogo={voc} parameter="Volatile Organic" />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex flex-row justify-center pt-5">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700" onClick={fetchData}>
          Get data
        </button>
      </div>
    </div>
  );
}

export default ComponentC;
