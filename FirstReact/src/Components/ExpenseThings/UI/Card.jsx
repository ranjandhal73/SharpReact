


const Card = (props) => {
  return (
    <div className="w-full bg-slate-600 h-screen">
      <div className="text-white">{props.children}</div>
    </div>
  );
};

export default Card;
