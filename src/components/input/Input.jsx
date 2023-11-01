import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './input.css';

function Input({ addNewMessage, newMessage, setNewMessage }) {
  const messageSubmitHandle = (e) => {
    e.preventDefault();
    addNewMessage(newMessage);
    setNewMessage('');
  };
  return (
    <div className='input-container'>
      <form>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          placeholder='Type something...'
        />
        <div className='send'>
          <AttachFileIcon className='icon' />
          <AddPhotoAlternateIcon className='icon' />
          <button type='submit' onClick={messageSubmitHandle}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
