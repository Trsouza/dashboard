import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

//npm add apexcharts react-apexcharts

export function DonutCustom (props: any) {

const options: ApexOptions = {
    chart: {
      //height: 300,
      //type: 'donut',
      animations: {
        enabled: false
      },
      zoom: {
        enabled: false
      },
    },
    legend: {
      show: false,
    }

  };

  //const series = [11, 32, 45, 32, 34, 52, 41];
  
  return (
    <div style={{ width: 220 , padding: 10, margin: 10,  background: "#e4ece5", borderRadius: 15}}>
      <ReactApexChart
      //{...console.log(props, " ddd")}
        options={options}
        series={props.data.data}
        type="donut"
        height={200}
        width={200}
      />
    </div>
  );

}