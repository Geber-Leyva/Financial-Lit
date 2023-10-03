import './App.css';
import Navbar from './Nav&Footer/Navbar';
import Topics from './Topics';
import Footer from './Nav&Footer/Footer';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='wholeApp'>
      <Navbar />

      <Topics />
      <div>
        <header>
          <h1>Calculator</h1>
        </header>
      </div>
      <Footer />
    </div>
    
    
    
  );
}

export default App;
