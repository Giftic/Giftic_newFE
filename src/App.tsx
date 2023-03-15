import './App.css';
import Home from './Pages/Landing';
import {NextLanding } from './Pages/Landing/index';
import {Routes,Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {css} from '@emotion/react';

function App() {

  const location= useLocation();

  return(<>
  <AnimatePresence mode="wait">
  <Routes location={location} key={location.key}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/landing" element={<NextLanding/>}>
    </Route>
  </Routes>
  </AnimatePresence>
  </>
  );
}
export default App;
