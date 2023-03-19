import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Usermain from './Components/User-main/Usermain';


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

    <Routes>
      <Route path='/covid19' element={<Usermain/>} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
