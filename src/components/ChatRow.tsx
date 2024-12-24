const ChatRow = ({
  name,
  message,
  time,
  avatarSrc,
}: {
  name: string;
  message: string;
  time: string;
  avatarSrc: string;
}) => (
  <div className="grid grid-cols-12 items-center pt-2 pb-2 hover:bg-[#06053a] cursor-pointer">
    <div className="col-span-2 mx-2">
      <img src={avatarSrc} alt="Avatar" className="h-10 w-10 rounded-full" />
    </div>
    <div className="col-span-7">
      <div className="text-gray-200 text-sm">{name}</div>
      <div className="text-xs text-gray-400">{message}</div>
    </div>
    <div className="col-span-3 text-gray-300 text-xs mx-2 text-center">
      {time}
    </div>
  </div>
);

export default ChatRow;
