
import { Navigate, Route, Routes } from 'react-router-dom';
import InnerContent from '../components/innerContent/InnerContent';
import Bitcoin from '../components/tabs/Bitcoin';
import Ethereum from '../components/tabs/Ethereum';
import Cardano from '../components/tabs/Cardano';
import Tabs from '../components/tabs/Tabs';
import { Home } from "../pages/home/Home";
import { Setting } from "../pages/setting/Setting";

export const AppRoutes = () => {
    return (  
        <Routes>
            <Route path="/" element={<InnerContent/>}>
                <Route path="/" element={<Navigate replace to="home" />}/>
                <Route path="home" element={<Home/>}/>              
                <Route path="settings" element={<Setting/>}/>                          
            </Route>
            <Route path="coins" element={<Tabs/>}>
                <Route path="/coins" element={<Navigate replace to="btc" />}/>
                <Route path="btc" element={<Bitcoin/>}/>
                <Route path="eth" element={<Ethereum/>}/>
                <Route path="ada" element={<Cardano/>}/>
            </Route>   
        </Routes>
    );
}


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "../components/Layout/Layout";
// import { Home } from "../pages/home";

// export const AppRoutes = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <AppLayout>
//                     <Route path='/' element={<Home/>} />   
//                 </AppLayout>             
//             </Routes>
//         </BrowserRouter>
//     )
// }
