import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

const ChartAssortment = ({ values }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Line Chart per Day'
      }
    }
  }
  const labels = values.map((item) => item.fecha)
  const data = {
    labels,
    datasets: [
      {
        label: 'Ton',
        data: values.map((item) => Number(item.total.trim())),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
      // {
      //   label: 'Dataset 2',
      //   data: labels.map((_, i) => i),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)'
      // }
    ]
  }
  return <Line options={options} data={data} />
}

export default ChartAssortment
