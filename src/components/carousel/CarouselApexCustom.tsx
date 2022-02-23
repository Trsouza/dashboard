import { Button, Carousel, Space } from "antd";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { DonutCustom } from "../apex/DonutCustom";
import { DoughnutChart } from "../chart/DoughnutChart";
import MonthlySummary from "../modal/MonthlySummary";

const CarrouselApexCustom = (props: any) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("clique")
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="tab1" style={{ display: "" }}>
        <Carousel className="carousel" style={{ display: "", width: "" }}>
          <div className="divAA">
       
            {props.dataset?.map((item: any, index: number) => {
    
              const dateResult = item?.date.split("-");
              if (index < 3) {
                return (
                  <Space className="div-dou" key={index}>
                    <div onClick={showModal} style={{cursor: "pointer"}}>
                      <span>{dateResult[1] + "/" + dateResult[2]}</span>
                        <DonutCustom
                          data={{
                            day: 18,
                            data: [Math.sign(10000 - item?.amount) === 1? 10000 - item?.amount : 0, item?.amount],
                          }}
                        >
                        </DonutCustom>
                        {" "}
                      <label>{"US$ "+ item.avg_price.toFixed(2)}</label>
                      <p>Average price</p>
                    </div>
                  </Space>
                );
              } else return ("");
            })}
          </div>
          <div className="divBB">

            {props.dataset?.map((item: any, index: number) => {
              const dateResult = item.date.split("-");
              if (index >= 3) {
              return (
                  <Space className="div-dou" key={index}>
                    <div >
                      <span>{dateResult[1] + "/" + dateResult[2]}</span>
                      <DonutCustom
                        data={{
                          day: 18,
                          data: [10000 - item?.amount, item?.amount],
                        }}
                      >
                        {" "}
                      </DonutCustom>
                      <label>{"$ "+ item.avg_price.toFixed(2)}</label>
                      <p>Average price</p>
                    </div>
                  </Space>
                );
              } else return ("");
            })}
          </div>
        </Carousel>
      </div>

      <MonthlySummary isModalVisible={isModalVisible} onCancel={handleCancel}></MonthlySummary>

    </>
  );
};

export default CarrouselApexCustom;
