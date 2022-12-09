
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>
     
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/details/:gameid" element={<Details />}/>
     
      
      
     
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
