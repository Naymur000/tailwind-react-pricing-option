import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksData = use(marksPromise);
  console.log(marksData);

  return (
    <div>
      <BarChart width={1300} height={500} data={marksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"math"}  fill="yellow"></Bar>
        <Bar dataKey={"physics"}  fill="blue"></Bar>
        <Bar dataKey={"chemistry"}  fill="orange"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
