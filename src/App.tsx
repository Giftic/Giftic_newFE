import './App.css';
import Home from './Pages/Landing';
import {NextLanding, StepLanding1, StepLanding2, StepLanding3 } from './Pages/Landing/index';
import {Routes,Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {css} from '@emotion/react';
import Main from './components/main';

function App() {

  const location= useLocation();

  return(<>
  <AnimatePresence mode="wait">
  <Routes location={location} key={location.key}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/landing" element={<NextLanding/>}></Route>
    <Route path="/step1" element={<StepLanding1/>}></Route>
    <Route path="/step2" element={<StepLanding2/>}></Route>
    <Route path="/step3" element={<StepLanding3/>}></Route>
    <Route path="/home" element={<Main/>}></Route>
  </Routes>
  </AnimatePresence>
  </>
  );
}
export default App;
