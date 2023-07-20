import React, {useState} from "react";
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";

function InputChat({sendMessage}) {
  const [text, setText] = useState("");

  const MessageSend = () => {
    if (text) {
      sendMessage(text);
      setText("");
    }
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      MessageSend();
    }
  };

  return (
    <div
      data-testid="id1"
      className="mt-8 bg-slate-100 fixed bottom-0 right-0 z-50 w-screen flex justify-center items-center"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-row justify-between items-center pt-2 pb-2">
          <input
            className="w-full p-2 bg-white rounded-lg border border-slate-300"
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <div
            className="pl-4 pr-4 cursor-pointer"
            id="sendMessageButton"
            onClick={MessageSend}
          >
            <PaperAirplaneIcon
              className={`flex h-7 w-7 text-indigo-600  ${
                text ? "" : "opacity-30"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputChat;
