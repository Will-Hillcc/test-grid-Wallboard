import { useEffect, useState } from 'react';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useStompClient = (url: string, topic: string, username: string, password: string) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new SockJS(url);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      connectHeaders: {
        login: username,
        passcode: password,
      },
      onConnect: () => {
        stompClient.subscribe(topic, (message: Message) => {
          setMessages((prevMessages) => [...prevMessages, message.body]);
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, [url, topic, username, password]);

  return messages;
};

export default useStompClient;
