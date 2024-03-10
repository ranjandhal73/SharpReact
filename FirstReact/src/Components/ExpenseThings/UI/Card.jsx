


const Card = (props) => {
  return (
    <div className="w-full h-screen bg-slate-600">
      <div className="text-white">{props.children}</div>
    </div>
  );
};

export default Card;
