import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

 

const CounstomChart = ({card}) => {
  const {bookName,totalPages} = card;
  return (
    <div>
      <BarChart
      width={500}
      height={300}
      data={bookName}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" >
        {card.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default CounstomChart;