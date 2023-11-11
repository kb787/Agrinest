import logo from './logo.svg';
import './App.css';

import FarmerAccount from './farmerComponents/FarmerAccount';
import RegisterFarmer from './farmerComponents/RegisterFarmer';
import HomepageFarmer from './farmerComponents/HomepageFarmer' ;
import NewProduct from './farmerComponents/NewProduct';
import FarmerLogin from './farmerComponents/FarmerLogin';
import FarmerComplaintsLetter from './farmerComponents/FarmerComplaintsLetter';

import BuyerLogin from './buyerComponents/BuyerLogin' ;
import BuyerRegister from './buyerComponents/BuyerRegister';
import Buyers from './buyerComponents/Buyers' ;
import Complaint from './buyerComponents/Complaint' ;
import Homepage from './buyerComponents/Homepage' ;
import Products from './buyerComponents/Products' ;
import ProductFinal from './buyerComponents/ProductFinal';


import {BrowserRouter,Routes,Route} from 'react-router-dom' ;

 
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
               <Route path = "/FarmerAccount" element = {<FarmerAccount/>}/>
               <Route path = "/" element = {<HomepageFarmer/>}/>
               <Route path = "/RegisterFarmer" element = {<RegisterFarmer/>}/>
               <Route path = "/FarmerLogin" element = {<FarmerLogin/>}/>
               <Route path = "/NewProduct" element = {<NewProduct/>}/>
               <Route path = "/BuyerRegister" element = {<BuyerRegister/>}/>
              {/* <Route path = "/BuyerLogin" element = {<BuyerLogin/>}/> */}
               <Route path = "/Buyers" element = {<Buyers/>}/>
               <Route path = "/Complaint" element = {<Complaint/>}/>
               <Route path = "/Homepage" element = {<Homepage/>}/>
               <Route path = "/Products" element = {<Products/>} />
               <Route path = "/ProductFinal" element = {<ProductFinal/>} /> 
               <Route path = "/FarmerComplaintsLetter" element = {<FarmerComplaintsLetter/>} /> 
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
