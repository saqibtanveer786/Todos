import './App.css';
import Navbar from './components/Navbar';
import NoteState from './context/notestate';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <NoteState>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </NoteState>
      </Router>
    </>
  );
}

export default App;
