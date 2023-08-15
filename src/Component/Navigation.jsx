import { color } from 'echarts';
import React, { useState, useEffect } from 'react';

const MalaysiaDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = {
    timeZone: 'Asia/Kuala_Lumpur',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const malaysiaDateTimeString = currentDateTime.toLocaleString('en-MY', options);

  return (
    <div className="flex flex-row justify-center" style={{color:"white"}}>
      <p style={{fontSize:20}}>{malaysiaDateTimeString}</p>
    </div>
  );
};

export default MalaysiaDateTime;
