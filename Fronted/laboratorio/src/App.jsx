import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import CustomerList from "./components/CustomerList";
import RegisterSale from "./components/RegisterSale";
import SalesList from "./components/SalesList";
import SalesReport from "./components/SalesReport";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/sales/new" element={<RegisterSale />} />
      <Route path="/sales" element={<SalesList />} />
      <Route path="/sales/report" element={<SalesReport />} />
    </Routes>
  </Router>
);

export default App;
