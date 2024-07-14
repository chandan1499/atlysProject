const reactions = [
  "💬",
  "😀",
  "😂",
  "😍",
  "😲",
  "😢",
  "👋",
  "💬",
  "😀",
  "😂",
  "😍",
  "😲",
  "😢",
  "👋",
  "💬",
  "😀",
  "😂",
  "😍",
  "😲",
  "😢",
  "👋",
];

export const ReactionsList = ({
  onClick,
}: {
  onClick: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="reactionsContainer">
      {reactions.map((emoji, index) => (
        <div
          key={index}
          className="reactionEmoji"
          onClick={() => onClick(emoji)}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};
