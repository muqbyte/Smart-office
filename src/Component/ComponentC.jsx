import React, { useState, useEffect } from 'react';
import CardDetail from './CardDetail';
import MyEchart from './MyEchart';
import BottomComponent from './BottomComponent';
import SecondChart from './SecondChart';

const ComponentC=(props)=> {
  const title=props.title;
  const unit=props.unit;
  const [IaqData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nr.txio.live/ambience/now');
        const jsonData = await response.json();
        const firstDataPoint=jsonData[0];
        console.log(firstDataPoint);
        setData(firstDataPoint);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      {IaqData ? (
        <div>
          {/* <div  >
            <div style={{maxWidth:"100%"}}>
              <CardDetail title="Humidity" />
              <MyEchart getId="humidityChart" valueLevel={IaqData.RH} paramterValue="Humidity" maxValue="100"/>
              <BottomComponent value={IaqData.RH} unit="%"/>
            </div>
            <div style={{maxWidth:"100%"}}>
              <CardDetail title="Temperature" />
              <MyEchart getId="temperatureChart" valueLevel={IaqData.TMP} paramterValue="Temperature" maxValue="100"/>
              <BottomComponent value={IaqData.TMP} unit="°C"/>
            </div>
            <div style={{maxWidth:"100%"}}>
              <CardDetail title="Carbon Dioxide" />
              <MyEchart getId="carbonDioxideChart" valueLevel={IaqData.CO2} paramterValue="C02" maxValue="800"/>
              <BottomComponent value={IaqData.CO2} unit="ppm"/>
            </div>
          </div> */}

          {/* <div  >
            <div style={{maxWidth:"100%"}}>
              <CardDetail title="PM2.5" />
              <MyEchart getId="particleTwoFiveChart" valueLevel={IaqData.PM25} paramterValue="PM2.5" maxValue="50"/>
              <BottomComponent value={IaqData.PM25} unit=" µg/m3"/>
            </div>
            <div style={{maxWidth:"100%"}}>
              <CardDetail title="Total volatile organic compounds" />
              <MyEchart getId="particleTenChart" valueLevel={IaqData.TVOC} paramterValue="TVOC" maxValue="500"/>
              <BottomComponent value={IaqData.TVOC} unit="ppb"/>
            </div>
          </div> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ComponentC;