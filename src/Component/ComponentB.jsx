import React, { useState, useEffect } from 'react';

const ComponentB = () => {
  const [data, setData] = useState({ TMP: null, RH: null });
  const apiUrl = 'https://nr.txio.live/ambience/now';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const jsonData = await response.json();
          const firstDataPoint = jsonData[0];
          setData({
            TMP: firstDataPoint.TMP || 'N/A',
            RH: firstDataPoint.RH || 'N/A',
          });
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <h1>Ambience Data</h1>
      <div>
        <p style={{ color: 'red' }}>Temperature: {data.TMP}</p>
        <p>Humidity: {data.RH}</p>
      </div>
    </div>
  );
};

export default ComponentB;
