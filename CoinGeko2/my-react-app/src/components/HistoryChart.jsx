import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import moment from "moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

  if (!response || !response.prices) {
   
      return(
        <div className='wrapper-container'>
          <Skeleton className="h-72 w-full mb-10"/>
          
          
        </div>
      )
    
  }

  const coinCharData = response.prices.map(value => ({
    x: value[0], 
    y: parseFloat(value[1].toFixed(2)) 
  }));

  const options = {
    responsive: true
  };

  const data = {
    labels: coinCharData.map(value => moment(value.x).format('MMM DD')), // ✅ תוויות מסודרות
    datasets: [
      {
        fill: true, 
        label: id,
        data: coinCharData.map(val => val.y), 
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default HistoryChart;
