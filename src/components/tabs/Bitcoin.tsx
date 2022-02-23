import { useEffect, useState } from "react";
import api from "../../service/api";
import CarrouselCustom from "../carousel/CarouselCustom";

const Bitcoin = () => {
  const [state, setState] = useState<any>();

  const dailyQuote = async () => {

    try {
      let list = [];
      const currentDate = new Date();
      // const currentDay = String(currentDate.getDate()).padStart(2, '0');
      let day = currentDate.getDate();
      let month = currentDate.getMonth();
      let year = currentDate.getFullYear();
  
      for (let x = 0; x < 6; x++) {
        const response = await api.get(`BTC/day-summary/${year}/${month}/${day-1}`);
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
      {console.log(state, " state")}
      <CarrouselCustom dataset={state}/>
      
    </>
  );
};

export default Bitcoin;
