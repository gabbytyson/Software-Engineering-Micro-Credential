import './App.css'
//this is where you need to import your components for example below
import Header from './headerComponent/headerComponent.jsx'
import MainComponent from './mainComponent/mainComponent.jsx'
import NavBar from './navBarComponent/navBarComponent.jsx'
import Footer from './footerComponent/footerComponent.jsx'

//this is where you can add your components to the App component
//including your header, main, havebar
export default function App() {
  return (
    <main>
      <Header />
      <NavBar />
      <MainComponent />
      <Footer />
    </main>

  );
}










