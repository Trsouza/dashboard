import { Carousel, Space } from "antd";
import { DoughnutChart } from "../chart/DoughnutChart";

const CarrouselCustom = (props: any) => {

  return (
    <>
      <div className="tab1" style={{ display: "" }}>
        <Carousel className="carousel" style={{ display: "", width: "" }}>
          <div className="divAA">

            {props.dataset?.foreach((item: any, index: number) => {
    
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
                      <label>{"US$ "+ item.avg_price.toFixed(2)}</label>
                      <p>Average price</p>
                    </div>
                  </Space>
                );
              }
            })}
          </div>
          <div className="divBB">

            {props.dataset?.foreach((item: any, index: number) => {
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
      </div>
    </>
  );
};

export default CarrouselCustom;
