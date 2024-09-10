import React, { useEffect, useState } from 'react';
import './Grid.css';

interface GridProps {
  values: string[];
  colors: string[];
}

const Grid: React.FC<GridProps> = ({ values, colors }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid-container">
      {values.map((value, index) => (
        <div key={index} className="grid-item" style={{ backgroundColor: colors[index] }}>
          <div className="grid-title">{value}</div>
          {value === 'Current Time' && <div className="grid-content">{currentTime}</div>}
        </div>
      ))}
    </div>
  );
};

export default Grid;
