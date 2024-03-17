

function ChartBar(props){
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%' ;
    }
    return (
        <>
            <div className="h-full flex flex-col items-center mr-1">
                <div className=" h-full w-full border border-gray-700 rounded-lg bg-purple-200 overflow-hidden flex flex-col justify-end">
                    <div className="bg-indigo-800 w-full transition-all duration-300 ease-out" 
                    style={{height: barFillHeight}}
                    ></div>
                </div>
                <div className="font-bold text-lg text-center text-red-600">
                    {props.label}
                </div>
            </div>
        </>
    );
};

export default ChartBar;