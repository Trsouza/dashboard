import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

//npm add apexcharts react-apexcharts

export function LineCustom() {

const options: ApexOptions = {
    chart: {
      toolbar: {
        //show: true,
        //offsetX: 0,
        //offsetY: 0,
        tools: {
          download: '<img src="../../../static/c.png" width="20">' ,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: []
        },
        export: {
          csv: {
            // filename: undefined,
            // columnDelimiter: ',',
            // headerCategory: 'category',
            // headerValue: 'value',
            // dateFormatter(timestamp) {
            //   return new Date(timestamp).toDateString()
            // }
          },
          svg: {
            filename: "undefined",
          },
          png: {
            filename: undefined,
          }
        },
        autoSelected: 'zoom' 
      },
      //height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
  };

  const series = [
    {
      name: "All Tasks",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "My Tasks",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];
  
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
      width={500}
    />
  );

}