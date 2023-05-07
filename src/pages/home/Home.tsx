//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CarrouselApexCustom from "../../components/carousel/CarouselApexCustom";
import api from "../../services/api";

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
        const response = await api.get(`BTC/day-summary/2022/02/${day - 1}`);
        list.push(response.data);
        day--;
      }
      setState(list);
    } catch (e) {
      // console.error(e)
    }

  };

  useEffect(() => {
    dailyQuote();
  }, []);

  return (
    <>
      <div className="tabs">
        <header>
          <h1 data-testid={"title"}>Bitcoin summary</h1>
        </header>
        <CarrouselApexCustom dataset={state}></CarrouselApexCustom>
      </div>
    </>
  );
}
