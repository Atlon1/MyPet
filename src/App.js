import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./router/Home";
import CustomSite from "./router/CustomSite";
import CharacSite from "./router/CharacSite";
import EatSite from "./router/EatSite";
import CherishSite from "./router/CherishSite";




export default  function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/myPet/' element={<Home/>}/>
            <Route path='/myPet/customize' element={<CustomSite/>}/>
            <Route path='/myPet/charackter' element={<CharacSite/>}/>
            <Route path='/myPet/eat' element={<EatSite/>}/>
            <Route path='/myPet/cherish' element={<CherishSite/>}/>
        </Routes>
      </BrowserRouter>
  )
};
