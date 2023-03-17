import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
  <main>
    <Routes>
      <Route path='/' element={<LoginPage />}/>
    </Routes>
    
  </main>
    <Routes>
      <Route path='/Register' element={<RegisterPage />} />
    </Routes>


  </BrowserRouter>
  );
}

export default App;
