
// import { useEffect, useState } from 'react';
import { use } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultsChart = () => {

    // const [resultData, setResultData] = useState([]);

    // useEffect(()=> {
    //     fetch("/public/ResultsChart.json")
    //     .then(res => res.json())
    //     .then(data => setResultData(data))
    // },[])


    const result = fetch("/public/ResultsChart.json")
                        .then(res => res.json())
                        
    const resultData = use(result)
    console.log(resultData)

    return (
        <div>
            <LineChart width={1200} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

                <Line dataKey={"math"}></Line>
                <Line dataKey={"physics"}></Line>
                <Line dataKey={"chemistry"}></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;