import { useEffect, useState } from "react";
import api from "../../service/api";
import CarrouselCustom from "../carousel/CarouselCustom";

const Bitcoin = () => {
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
      {/* <div className="tab1" style={{ display: "" }}>
        <Carousel className="carousel" style={{ display: "", width: "" }}>
          <div className="divAA">

            {state?.map((item: any, index: number) => {
              const dateResult = item?.date.split("-");
              if (index < 3) {
                return (
                  <Space className="div-dou" key={index}>
                    <div >
                      <span>{dateResult[1] + "/" + dateResult[2]}</span>
                      <DoughnutChart
                        
                        data={{
                          day: 18,
                          data: [Math.sign(10000 - item?.amount) === 1? 10000 - item?.amount : 0, item?.amount],
                        }}
                      >
                        {" "}
                      </DoughnutChart>
                      <label>{"$ "+ item.avg_price.toFixed(2)}</label>
                      <p>Average price</p>
                    </div>
                  </Space>
                );
              }
            })}
          </div>
          <div className="divBB">

            {state?.map((item: any, index: number) => {
              const dateResult = item.date.split("-");
              if (index >= 3) {
                return (
                  <Space className="div-dou" key={index}>
                    <div >
                      <span>{dateResult[1] + "/" + dateResult[2]}</span>
                      <DoughnutChart
                        
                        data={{
                          day: 18,
                          data: [10000 - item?.amount, item?.amount],
                        }}
                      >
                        {" "}
                      </DoughnutChart>
                      <label>{"$ "+ item.avg_price.toFixed(2)}</label>
                      <p>Average price</p>
                    </div>
                  </Space>
                );
              }
            })}
          </div>
        </Carousel>
      </div> */}
    </>
  );
};

export default Bitcoin;
