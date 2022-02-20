//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DoughnutChart } from "../../components/chart/DoughnutChart";
import api from "../../service/api";

export function Home() {
  //const navigate = useNavigate();

  let montarData = {};

  const [state, setState] = useState<any>();
  const [meses, setMeses] = useState<any[]>([]);

  const dailyQuote = async () => {
    let list = [];
    let day = 15;

    for (let x = 0; x < 3; x++) {
      const response = await api.get(`BTC/day-summary/2022/02/${day}`);
      console.log(response.data)
      list.push(response.data);
      day++;
    }
    setState(list)
  }

  // const montarData2 = {
  //     day: 18,
  //     data: [10000-state[0]?.amount, state[0]?.amount]
 
  //}

  useEffect(() => {
    dailyQuote();
  }, []);


  return (
    <div>
      <header>
        <h1>Tela Home</h1>
        {/* <nav>
            <div><button onClick={() => navigate("/")}>Home</button></div>
            <div><button onClick={() => navigate("/settings")}>Settings</button></div>
          </nav> */}
      </header>

     <div style={{display: "flex"}}>
      {console.log(state, " state")}
      {state?.map((item: any, index: number) => {
            return (
              <>
              <DoughnutChart 
                key={index}
                data={{
                  day: 18,
                  data: [10000-item?.amount, item?.amount]
                }}>
              </DoughnutChart>

        
              </>
            );
        })}
     
     </div>
   
    </div>
  );
}
