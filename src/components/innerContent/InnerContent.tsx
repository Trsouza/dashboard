import { Content } from 'antd/lib/layout/layout';
import {Outlet} from 'react-router-dom'

const  InnerContent=() =>{
  return (
    <Content className='inner-content' style={{margin: "20px 20px 20px 0px"}}>
      <Outlet/>
    </Content>
  );
    
}

export default InnerContent;