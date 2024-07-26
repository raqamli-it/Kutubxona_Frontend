import './App.css';
// import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Root from './components/pages/root';
function App() {
  
  return (
    <BrowserRouter>
        <Root/>
    </BrowserRouter>
  );
}

export default App;
