// import {useEffect, useState } from "react";
import {
  Iphone,
  IphoneContainer,
  Header,
  LogoImg,
  LoginButton,
  SkipButton,
  LoginSkipContainer,
  StartButton,
  StartText,
  Gifticon,
} from "./styles";
import { useNavigate} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const HeaderSet = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <LogoImg src="/imgs/logo.png"></LogoImg>
        <LoginSkipContainer>
          <LoginButton>
            <div
              onClick={() => {
                navigate("login");
                console.log("/login");
              }}
            >
              {true ? "log-in" : "log-out"}
            </div>
          </LoginButton>
          <SkipButton>
            <div
              onClick={() => {
                if (true) {
                  console.log("skip");
                } else {
                  navigate("/login");
                }
              }}
            >
              Skip
            </div>
          </SkipButton>
        </LoginSkipContainer>
      </Header>
    </>
  );
};
const Home = () => {
  //framer-variants

  const Variants = {
    hidden: {
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1,1.1,1],
      transition: { duration: 4 },
    },
    visible: {
      color: "white",
      fontWeight: "bold",
      textShadow: "0px 0px 15px rgb(200,200,200)",
      boxShadow: "0px 0px 100px rgb(250,255,255)",
    },
  };

  const navigate = useNavigate();
  return (
    <>
      <HeaderSet></HeaderSet>
      <div style={{ width: "100%", height: "auto" }}>
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          style={{
            width: "100%",
            height: "800px",
            background:
              "linear-gradient(60deg, #F1F3EE 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <AnimatePresence>
            <IphoneContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <StartText>
                <div>
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    기부를 고민하셨나요?
                  </h1>
                  <h3
                    style={{
                      fontSize: "1rem",
                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    쉽고 간단하게 기부를 시작하세요
                  </h3>
                </div>
                <Gifticon></Gifticon>
              </StartText>
              <StartButton
                variants={Variants}
                animate="hidden"
                initial="visible"
              >
                <div
                  onClick={() => {
                    navigate("/landing");
                  }}
                >
                  시작하기
                </div>
              </StartButton>
              <Iphone></Iphone>
            </IphoneContainer>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export const NextLanding=()=>{return(<>
<HeaderSet></HeaderSet>
<motion.div></motion.div>
<motion.div></motion.div>
<motion.div></motion.div>
<motion.div></motion.div>

</>)}

export default Home;
