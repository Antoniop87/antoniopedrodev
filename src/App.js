import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import './dist/output.css'
import Download from './Pages/Download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Download' element={<Download/>}/>
      </Routes>
    </Router>
  );
}

export default App;
