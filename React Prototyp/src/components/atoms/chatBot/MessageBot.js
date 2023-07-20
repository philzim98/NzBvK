import ChatBot from "../../../assets/ChatBot.png";

function MessageBot({text, img}) {
  const paragraphs = text.split("\n").map((line, index) => (
    <p className="text text-black" key={index}>
      {line}
      <br />
    </p>
  ));
  return (
    <div className="flex flex-row mt-4 items-center ml-4 chatBotMessage">
      <img
        src={ChatBot}
        alt="Business Mann 42"
        className="h-10 w-10 rounded-full bg-indigo-500"
      />
      <div className="pl-4 pr-4 pt-2 pb-2 ml-4 mr-4 bg-white rounded-lg drop-shadow-sm">
        {paragraphs}
      </div>
    </div>
  );
}

export default MessageBot;
