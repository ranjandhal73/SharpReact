import ChartBar from "./ChartBar";

function Chart(props){
    const dataPointValues = props.dataPoints.map((dataPoint)=>dataPoint.value);
    const totalMax = Math.max(...dataPointValues)
    console.log(props.dataPoints);
    return (
        <>
            <div className="p-4 rounded-lg bg-purple-100 text-center flex justify-center h-40 mt-4">
                {
                  props.dataPoints.map((dataPoint)=>{
                       return <ChartBar 
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMax}
                            label={dataPoint.label}
                        />

                    })
                }
            </div>
        </>
    )
}

export default Chart;