import './App.css';
import Navbar from './Nav&Footer/Navbar';
import Topics from './Topics';
import Footer from './Nav&Footer/Footer';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='wholeApp'>
      <Navbar />
      <main>
        <Topics />
        <h1>Calculator</h1>
      </main>  
      <Footer />
    </div>
  );
}

export default App;
