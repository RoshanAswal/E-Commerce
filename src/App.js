
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
// import 'https://fonts.googleapis.com/css2?family=Merriweather&family=Signika+Negative:wght@600&display=swap';
import FrontPage from './pages/FrontPage/FrontPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/productPage' element={<ProductPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
