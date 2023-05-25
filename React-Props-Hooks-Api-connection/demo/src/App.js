import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Layout/Header';
import Contact from './pages/Contact';
import Employees from './pages/Employees';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     
      <Router>
       <header> <Header/></header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/employee' element={<Employees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
