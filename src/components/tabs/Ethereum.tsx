import { useEffect, useState } from "react";
import api from "../../service/api";
import CarrouselCustom from "../carousel/CarouselCustom";

const Ethereum = () => {
  const [state, setState] = useState<any>();

  const dailyQuote = async () => {
    let list = [];
    const currentDate = new Date();
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    let day = parseInt(currentDay);

    for (let x = 0; x < 6; x++) {
      const response = await api.get(`BTC/day-summary/2022/02/${day-1}`);
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
      {/* <div className="tab2"> </div>

      <div style={{ display: "flex" }}>
        {console.log(state, " state")}
        {state?.map((item: any, index: number) => {
          return (
            <DoughnutChart
              key={index}
              data={{
                day: 18,
                data: [10000 - item?.amount, item?.amount],
              }}
            ></DoughnutChart>
          );
        })}
      </div> */}
    </>
  );
};

export default Ethereum;
