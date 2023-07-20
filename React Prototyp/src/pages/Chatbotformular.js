import React, {useState, useEffect, useRef} from "react";
import {form} from "../data/data";

import InputChat from "../components/atoms/chatBot/InputChat";
import MessageBot from "../components/atoms/chatBot/MessageBot";
import MessageUser from "../components/atoms/chatBot/MessageUser";

export default function Chatbotformular({callBack}) {
  const messagesEndRef = useRef(null);
  const pageLoadTime = useRef(null); // Ref erzeugen

  const init = {isBot: true, text: form[0].question};

  const [index, setIndex] = useState(0);
  const [chat, setChat] = useState([init]);

  const [data, setData] = useState(new Array(form.length).fill(""));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    pageLoadTime.current = Date.now();
    window.scrollTo(0, 0);
  }, []);

  const changeData = (value, index) => {
    let tempData = data;
    tempData[index] = value;
    setData([...tempData]);
  };

  return (
    <div className="bg-slate-200 min-w-full min-h-screen flex flex-col items-center pl-6 pr-6">
      <div className="w-full max-w-5xl pt-4 pb-24">
        {chat.map((element, Index) => {
          if (element.isBot) {
            return <MessageBot key={Index} text={element.text} />;
          }

          return <MessageUser key={Index} text={element.text} />;
        })}

        <div ref={messagesEndRef} />

        <InputChat
          sendMessage={text => {
            let pageUnloadTime = Date.now();
            let spentTimeMillis = pageUnloadTime - pageLoadTime.current; // verbrachte Zeit in Millisekunden

            let tempIndex = index;
            tempIndex = tempIndex + 1;

            changeData(text, index);

            if (form.length - 1 < tempIndex) {
              // Verhindert das weiter machen wenn nicht alle Daten eingetrafen sind
              /*
                let allFieldsFilledOut = data.every(str => str.length > 0);

                if (!allFieldsFilledOut) {
                  alert("Bitte füllen Sie alle Felder aus.");
                  return;
                }
              */
              callBack(data, spentTimeMillis);
              return;
            }

            const user = {isBot: false, text: text};
            const bot = {isBot: true, text: form[tempIndex].question};

            setIndex(tempIndex);
            setChat([...chat, user, bot]);
          }}
        />
      </div>
    </div>
  );
}
