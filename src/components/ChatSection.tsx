import ChatRow from "./ChatRow";

const ChatSection = ({
  title,
  chats,
  isGroup = false,
}: {
  title: string;
  chats: { name: string; message: string; time: string; avatarSrc: string }[];
  isGroup: boolean;
}) => (
  <div
    className={`mt-2 bg-black overflow-y-scroll no-scrollbar ${
      isGroup ? "h-[300px]" : "h-48"
    }`}
  >
    <div className="text-gray-100 text-xs font-semibold mx-2 sticky top-0 z-10 py-2 bg-black w-full">
      {title}
    </div>
    {chats.map((chat, index) => (
      <ChatRow key={index} {...chat} />
    ))}
  </div>
);

export default ChatSection;
