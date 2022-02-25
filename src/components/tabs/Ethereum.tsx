import { useEffect, useState } from "react";
import api from "../../services/api";
import CarrouselCustom from "../carousel/CarouselCustom";

const Ethereum = () => {
  const [state, setState] = useState<any>();

  const dailyQuote = async () => {
    let list = [];
    const currentDate = new Date();
   // const currentDay = String(currentDate.getDate()).padStart(2, '0');
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    for (let x = 0; x < 6; x++) {
      const response = await api.get(`ETH/day-summary/${year}/${month}/${day-1}`);
      //console.log(response.data);
      list.push(response.data);
      day--;
    }
    setState(list);
  };

  useEffect(() => {
    dailyQuote();
  }, []);

  return (
    <>
     <CarrouselCustom dataset={state}/> 
    </>
  );
};

export default Ethereum;
