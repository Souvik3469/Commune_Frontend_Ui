import avatar from "../assets/avatar.jpg";

interface Message {
  sender: "User1" | "User2"; // Determine the sender
  name: string;
  message: string;
  time: string;
}

const ChatArea = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="text-white h-[520px] flex flex-col px-2 overflow-y-scroll no-scrollbar">
      {messages.map((msg, index) => {
        const isUser1 = msg.sender === "User1";
        return (
          <div
            key={index}
            className={`flex items-center mx-2 my-2 ${
              isUser1 ? "self-end flex-row-reverse" : "self-start flex-row"
            }`}
          >
            <div>
              <img src={avatar} className="h-8 w-8 rounded-full mx-2" />
            </div>
            <div>
              <div
                className={`flex items-center ${
                  isUser1 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="text-xs sm:text-sm text-gray-300 mx-2">
                  {msg.name}
                </div>
                <div className="text-xs text-gray-500 mx-3">{msg.time}</div>
              </div>
              <div
                className={`flex ${isUser1 ? "justify-end" : "justify-start"} `}
              >
                <div>
                  <div
                    className={`rounded-md text-sm sm:text-base my-1 p-2 self-end inline-block max-w-60 sm:max-w-80 ${
                      isUser1 ? "bg-[#00A3FF]" : "bg-[#292929]"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <div
                    className={`flex ${
                      isUser1 ? "justify-end" : "justify-start"
                    } `}
                  >
                    <div className="text-xs text-gray-400 mx-1">Seen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatArea;
