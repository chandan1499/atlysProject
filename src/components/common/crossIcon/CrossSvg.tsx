export const CrossSvg = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="crossIconBox" onClick={onClick}>
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        id="cross"
      >
        <line
          x1="9.37"
          x2="54.63"
          y1="9.37"
          y2="54.63"
          fill="none"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="8"
        ></line>
        <line
          x1="9.37"
          x2="54.63"
          y1="54.63"
          y2="9.37"
          fill="none"
          stroke="#fff"
          stroke-miterlimit="10"
          stroke-width="8"
        ></line>
      </svg>
    </div>
  );
};
