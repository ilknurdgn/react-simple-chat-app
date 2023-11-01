import './message.css';

function Message({ messages }) {
  return (
    <div className='message-container'>
      {messages.map((message, index) => (
        <div key={index} className='message'>
          <div className='messageInfo'>
            <img
              src='https://media.licdn.com/dms/image/D4E03AQE5esUKWj2g3A/profile-displayphoto-shrink_800_800/0/1676535532976?e=1704326400&v=beta&t=SH6gECiUJToRxveKGDe-5tJCjC3vQIUO95czXAECG-k'
              alt=''
            />
          </div>
          <div className='messageContet'>{message}</div>
        </div>
      ))}
    </div>
  );
}

export default Message;
