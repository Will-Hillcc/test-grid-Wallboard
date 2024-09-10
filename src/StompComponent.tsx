import React from 'react';
import useStompClient from './useStompClient';

const StompComponent: React.FC = () => {
  const messages = useStompClient(
    'activemq.dev.big4.local',
    'ybv_queue',
    'admin',
    'angel1c'
  );

  return (
    <div>
      <h1>STOMP Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default StompComponent;
