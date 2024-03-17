


const Card = (props) => {
  return (
    <div className="w-full bg-slate-600 pb-8"
    >
      <div className="text-white">{props.children}</div>
    </div>
  );
};

export default Card;
