import React, { useEffect, useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import { getPopulationData } from "../../service";
import Loader from "../Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

function LineChart() {
  const [labels, setLabels] = useState([]);
  const [popData, setPopData] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getDataAndGenArrays = async () => {
    try {
      const res = await getPopulationData();

      if (res.status === 200) {
        const data = res.data.data;

        let tempLabels = [];
        let tempPopData = [];
        for (let dataPoint of data) {
          tempLabels.unshift(dataPoint.Year);
          tempPopData.unshift(dataPoint.Population);
        }

        setLabels(tempLabels);
        setPopData(tempPopData);
        setIsDataLoaded(true);
      } else {
        toast.error("Fetching population data failed!");
      }
    } catch (err) {
      console.log(`#2024925502141 err`, err);
      toast.error("Something went wrong!!");
    }
  };

  useEffect(() => {
    getDataAndGenArrays();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Population",
        data: popData,
        borderColor: "#29AD29",
        backgroundColor: "#29AD29",
      },
    ],
  };

  return (
    <>{isDataLoaded ? <Line options={options} data={data} /> : <Loader />}</>
  );
}

export default LineChart;
