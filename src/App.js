import Home from "./component/home/Home";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './component/pagess/Product';
import Orders from './component/pagess/Orders';
import Customers from "./component/pagess/Customers";
import Logout from "./component/pagess/logout";
import Out from "./component/pagess/out";
import EmpEdit from "./component/curd/product/edit";

import Add from "./component/curd/product/add";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/user" element={<Customers />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/out" element={<Out />}></Route>
          <Route path='/product/edit/:empid' element={<EmpEdit />}></Route>
          <Route path="/add" element={<Add />}></Route>


        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;


