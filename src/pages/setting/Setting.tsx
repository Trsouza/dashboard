import { useCallback, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import api from '../../service/api';
import { DoughnutChart } from "../../components/chart/DoughnutChart";

interface IBolsa {
  data: any;
  obj: any
}

export const Setting = () => {
  //const navigate = useNavigate();
  const [state, setState] = useState<IBolsa[]>([]);
  const [meses, setMeses] = useState<any[]>([]);

  const componentDidMount = async () => {
    const response = await api.get('');
    const aux = response.data['Time Series (Daily)'];
    let result = [];
    console.log(response.data)
    
    for (var item in aux){
      let b: IBolsa =  {
        data: item,
        obj: aux[item]
      }
      result.push( b);
    }

    setState( result );

  }

  const agrupaMeses = useCallback ( () => {
      //  const findTemplate = useCallback(

      let result: any[]= []; 
      let janeiro: IBolsa[] = [];
      let fevereiro: IBolsa[] = [];
      let marco: IBolsa[] = [];
      let abril: IBolsa[] = [];
      let maio: IBolsa[] = [];
      let junho: IBolsa[] = [];
      let julho: IBolsa[] = [];
      let agosto: IBolsa[] = [];
      let setembro: IBolsa[] = [];
      let outubro: IBolsa[] = [];
      let novembro: IBolsa[] = [];
      let dezembro: IBolsa[] = [];

      state.forEach((d, index) => {
      //for (var k in d) {
          var _ = d.data.split("-");
          //var year = _[0]
          var month = _[1]

          switch (parseInt(month)) {
            case 1:
                janeiro.push(d); 
                break;
            case 2:
              fevereiro.push(d); 
                break;
            case 3:
              marco.push(d); 
                break;
            case 4:
              abril.push(d); 
                break;
            case 5:
              maio.push(d); 
                break;
            case 6:
              junho.push(d); 
                break;
            case 7:
                julho.push(d); 
                break;
            case 8:
              agosto.push(d); 
                break;
            case 9:
              setembro.push(d); 
                break;
            case 10:
              outubro.push(d); 
                break;
            case 11:
              novembro.push(d); 
                break;
            case 12:
              dezembro.push(d); 
                break;
        }
          
      // }
      });
      result.push(janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro);
      console.log(result, " result")
      setMeses(result);
      return result;

    },[state]
  );

  //const montarData = () => {
    console.log(meses[0], " meses")
    const montarData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          //data: [meses[0]?.length, meses[1]?.length, meses[2]?.length, meses[3]?.length, meses[4]?.length, meses[5]?.length, meses[6]?.length],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
   // console.log(data, " -----------------mettt")
   // return data;
  //}


  useEffect(() => {
    //componentDidMount();
    //agrupaMeses();
  }, [agrupaMeses]);

    return (
      <>
        <h1>Tela Settings</h1>
        <nav>
          {/* <div><button onClick={() => navigate("/")}>Home</button></div>
          <div><button onClick={() => navigate("/settings")}>Settings</button></div> */}
          <div><button onClick={() => agrupaMeses()}>Agrupa</button></div>
        
          {/* <div>{JSON.stringify(state)}</div> */}

        </nav>
    
      <DoughnutChart
      data={montarData}
      
      ></DoughnutChart>

      {/* <div>
        {state.map((item, index) => {
            return (
              <div key={index}> {item.data}</div>
            );
        })}
      </div> */}
      
      </>
      )
    }
  