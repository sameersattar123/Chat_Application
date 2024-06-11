import React, { useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  const handleEmoji = (event) => {
    setText((prev) => prev + event.emoji);
    setOpen(false)
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sameer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem quisquam sint nam fugit assumenda dolorum error ab omnis, maiores aliquid veritatis alias? Expedita, nulla mollitia reprehenderit laborum laboriosam quidem.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img (2).png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
