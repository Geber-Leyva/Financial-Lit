import '/Users/geber/Financial-Lit/src/App.css';
import Navbar from './Nav&Footer/Navbar';
import Topics from './Topic/Topics';
import Footer from './Nav&Footer/Footer';
import Calculator from './Calculator/Calculator';
import NextWindow from './Topic/TopicsPage'; // Adjust the path as needed
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function MainContent() {
  return (
    <div>
      <Topics />
      <Calculator />
      <h1>About us</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
    <div className='wholeApp'>
      <Navbar />
      <div className='main'>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/NextWindow" element={<NextWindow />} />
      </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
