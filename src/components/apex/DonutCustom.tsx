import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

//npm add apexcharts react-apexcharts

export function DonutCustom (props: any) {

const options: ApexOptions = {
    chart: {
      // toolbar: {
      //   show: true,
      //   offsetX: 0,
      //   offsetY: 0,
      //   tools: {
      //     download: '<img src="/public/static/c.png" width="20">',
      //     selection: true,
      //     zoom: true,
      //     zoomin: true,
      //     zoomout: true,
      //     pan: true,
      //     //reset: true | '<img src="/static/icons/reset.png" width="20">',
      //     customIcons: []
      //   },
      //   export: {
      //     csv: {
      //       // filename: undefined,
      //       // columnDelimiter: ',',
      //       // headerCategory: 'category',
      //       // headerValue: 'value',
      //       // dateFormatter(timestamp) {
      //       //   return new Date(timestamp).toDateString()
      //       // }
      //     },
      //     svg: {
      //       filename: undefined,
      //     },
      //     png: {
      //       filename: undefined,
      //     }
      //   },
      //   autoSelected: 'zoom' 
      // },
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
    },

  };

  //const series = [11, 32, 45, 32, 34, 52, 41];
  
  return (
    <div style={{ width: 220 , padding: 10, margin: 10,  background: "#e4ece5", borderRadius: 15}}>
      <ReactApexChart
      //{...console.log(props, " ddd")}
        options={options}
        series={props.data.data}
        type="donut"
        height={167}
        width={167}
      />
    </div>
  );

}