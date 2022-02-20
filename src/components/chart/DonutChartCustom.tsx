import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DonutChart from 'react-donut-chart';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DonutChartCustom(props: any) {
  const [dataResult, setDataResult] = useState<any>();

  useEffect(() => {

  }, []);

  // const data = {
  //   labels: ["Restante", "Vendido"],
  //   datasets: [
  //     {
  //       label: props.data.day,
  //       data: props.data.data,
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div style={{ width: 300 }}>
      {/* {console.log(props, " props33")} */}
      <DonutChart 
        legend={false}
        width={300}
        height={300}
        clickToggle={false}
        data={[
          {
            value: 75,
            label: '',
          },
          {
            label: '',
            value: 25,
            isEmpty: true,
          },
        ]} 
      />

    </div>
  );
}
