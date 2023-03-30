import "./App.css";
import Home from "./Pages/Landing";
import {
  NextLanding,
  StepLanding1,
  StepLanding2,
  StepLanding3,
} from "./Pages/Landing/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./components/main";
import SignUp from "./Pages/Login";
import LogIn from "./Pages/Login";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/landing" element={<NextLanding />}></Route>
              <Route path="/step1" element={<StepLanding1 />}></Route>
              <Route path="/step2" element={<StepLanding2 />}></Route>
              <Route path="/step3" element={<StepLanding3 />}></Route>
              <Route path="/home" element={<Main />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/login" element={<LogIn/>}></Route>
            </Routes>
          </AnimatePresence>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
export default App;
