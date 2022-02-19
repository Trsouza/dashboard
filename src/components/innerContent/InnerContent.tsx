import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return (
    <div className='inner-content' style={{margin: "20px 20px 20px 220px"}}>
      <Outlet/>
    </div>
  );
    
}

export default InnerContent;