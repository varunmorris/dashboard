import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Products } from './components/Products';
import { UserDetails } from './components/UserDetails';
import { Sellers } from './components/Sellers';
import { Tasks } from './components/Tasks/Tasks';
import { Dashboard } from './components/Dashboard'
import { Sales } from './components/Sales/Sales';
import { Charts } from './components/Charts/Charts';
import { Home } from './components/Home';


function App() {
  
  return (
    <React.Fragment>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index path="dashboard" element={<Dashboard />} />
            <Route index path="products" element={<Products />} />
            <Route index path="userdetails" element={<UserDetails />} />
            <Route index path="bestSellers" element={<Sellers />} />
            <Route index path="tasks" element={<Tasks />} />
            <Route index path="sales" element={<Sales />} />
            <Route index path="charts" element={<Charts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
