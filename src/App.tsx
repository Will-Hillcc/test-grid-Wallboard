import React from 'react';
import Grid from './Grid';
import StompComponent from './StompComponent';

const App: React.FC = () => {
  const gridValues = [
    'Calls Waiting', 'Longest Waiting', 'Agents Online', 'Agents On Call', 'Current Time',
    'Calls Parked', 'Longest Parked', 'Agents Free', 'Agents DND', 'Agents Busy',
    'Dedicated Free', 'Dedicated Online', 'Calls Answered', 'Calls over 5s', 'Calls Lost',
    'Lost Calls Rolawn', 'Liberate Group Inbound', 'Liberate Group Lost', 'Active Calls', 'Management Free'
  ];

  const gridColors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
    '#33FFA1', '#FFA133', '#5733FF', '#FF5733', '#33FF57',
    '#3357FF', '#FF33A1', '#A133FF', '#33FFA1', '#FFA133',
    '#5733FF', '#FF5733', '#33FF57', '#3357FF', '#FF33A1'
  ];

  return (
    <div>
      <Grid values={gridValues} colors={gridColors} />
      
    </div>
  );
};

export default App;
