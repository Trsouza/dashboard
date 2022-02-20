import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart(props: any) {
  const [dataResult, setDataResult] = useState<any>();

  useEffect(() => {}, []);

  const data = {
    labels: ["Expected", "Sold"],
    datasets: [
      {
        label: props.data.day,
        data: props.data.data,
        backgroundColor: [
          "rgba(171, 172, 158, 0.2)",
          "rgba(206, 203, 9, 0.2)",
        ],
        borderColor: [
          "rgba(171, 172, 158, 1)",
          "rgba(206, 203, 9, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // const plugins = [{
  //   beforeDraw: function(chart) {
  //    var width = chart.width,
  //        height = chart.height,
  //        ctx = chart.ctx;
  //        ctx.restore();
  //        var fontSize = (height / 160).toFixed(2);
  //        ctx.font = fontSize + "em sans-serif";
  //        ctx.textBaseline = "top";
  //        var text = "Foo-bar",
  //        textX = Math.round((width - ctx.measureText(text).width) / 2),
  //        textY = height / 2;
  //        ctx.fillText(text, textX, textY);
  //        ctx.save();
  //   } 
  // }]

  const options = {
    
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    layout: { padding: 0 },
    //responsiveAnimationDuration: 500,
    // title: {
    //   display: true,
    //   text: "xxx"
    // },

    // plugins: {
    //   legend: {
    //     display: false
    //   },
    // }
  
  }

  return (
    <div style={{ width: 200 , padding: 10, margin: 10,  background: "#e4ece5", borderRadius: 15}}>
      {/* {console.log(props, " props")} */}
      <Doughnut data={data} 
      width={200}
      height={200}
      //options={ options }
      
      options={{
          
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        layout: { padding: 0 },
        plugins: {
          legend: {
            display: false
          },
        }
      }} 

      />
    </div>
  );
}
