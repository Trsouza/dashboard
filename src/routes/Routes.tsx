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

import { Navigate, Route, Routes } from 'react-router-dom';
import InnerContent from '../components/innerContent/InnerContent';
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
        </Routes>
    );
}
