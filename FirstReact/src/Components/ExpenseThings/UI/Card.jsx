


const Card = (props) => {
  return (
    <div className="w-full">
      <div className="text-white">{props.children}</div>
    </div>
  );
};

export default Card;
