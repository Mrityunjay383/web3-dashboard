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
import { getPopulationData } from "../../../service";
import Loader from "../../Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const convertNums = (num) => {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return convertNums(value);
        },
      },
    },
  },
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
