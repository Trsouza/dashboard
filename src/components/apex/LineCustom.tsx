import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

//npm add apexcharts react-apexcharts

export function LineCustom() {

const options: ApexOptions = {
    chart: {
      height: 350,
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