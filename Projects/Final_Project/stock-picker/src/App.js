import logo from './logo.svg'; 
import './App.css';

import Header from './component/headerComponent/headerComponent.jsx'
import NavBar from './component/navBarComponent/navBarComponent.jsx'
import Home from './component/homeComponent/homeComponent.jsx'
import Ticker from './component/tickerComponent/tickerComponent.jsx'
import User from './component/userComponent/userComponent.jsx'
import Login from './component/authComponent/authComponent.jsx'
import Footer from './component/footerComponent/footerComponent.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

<div className="tickerApp">
    <Header />
    <NavBar />
    <Footer />
    
    <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            ></Route>
            <Route
                exact
                path="/user"
                element={<User />}
            ></Route>
            <Route
                exact
                path="/login"
                element={<Login />}
            ></Route>
            <Route
                exact
                path="/ticker"
                element={<Ticker />}
            ></Route>
            </Routes>
</div>

  );
}

export default App;
