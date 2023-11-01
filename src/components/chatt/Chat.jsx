import { useState } from 'react';
import Input from '../input/Input';
import Message from '../message/Message';
import './chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const addNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
  return (
    <div className='chat-container'>
      <Message messages={messages} />
      <Input
        className='input'
        addNewMessage={addNewMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </div>
  );
}

export default Chat;
