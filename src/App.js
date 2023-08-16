import Navigation from './Components/Navigation.js';
import './App.css'
import Hero from './Components/Hero.js';
import CompusInformation from './Components/CompusInformation.js';
import Footer from './Components/Footer.js';

const App = () =>{

  return (
    <div>
       <Navigation/>
       <Hero/>
       <CompusInformation/>
       <Footer></Footer>
    </div>
  );
}

export default App;
