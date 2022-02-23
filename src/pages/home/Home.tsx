//import { useNavigate } from "react-router-dom";
import { Carousel, Space } from "antd";
import { useEffect, useState } from "react";
import { DonutCustom } from "../../components/apex/DonutCustom";
import CarrouselApexCustom from "../../components/carousel/CarouselApexCustom";
import { DoughnutChart } from "../../components/chart/DoughnutChart";
import MonthlySummary from "../../components/modal/MonthlySummary";
import api from "../../service/api";

export function Home(props: any) {
  //const navigate = useNavigate();

  let montarData = {};

  const [state, setState] = useState<any>();
  const [meses, setMeses] = useState<any[]>([]);

  const dailyQuote = async () => {

    try {
      let list = [];
      const currentDate = new Date();
      const currentDay = String(currentDate.getDate()).padStart(2, '0');
      let day = parseInt(currentDay);
  
      for (let x = 0; x < 6; x++) {
        const response = await api.get(`BTC/day-summary/2022/02/${day-1}`);
        list.push(response.data);
        day--;
      }
      setState(list);
    } catch (e) {
      console.error(e)
    }

  };

  useEffect(() => {
    dailyQuote();
  }, []);

  return (
    <>
      <div className="tabs">
        <header>
          <h1>Weekly overview</h1>
        </header>
        <CarrouselApexCustom dataset={state}></CarrouselApexCustom>
      </div>
    </>
  );
}
