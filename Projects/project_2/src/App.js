import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/headerComponent/headerComponent';
import NavBarComponent from './components/navBarComponent/navBarComponent'; 
import MainComponent from './components/mainComponent/mainComponent'; 
import FooterComponent from './components/footerComponent/footerComponent'; 
import pets from "./resources/pets.jsx"

function App() {
  return (

<div className="petApp">
    <HeaderComponent />
    <NavBarComponent />
    <MainComponent petsProp={pets} />
    <FooterComponent />
</div>

  );
}

export default App;
