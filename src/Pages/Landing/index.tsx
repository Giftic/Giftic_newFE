/** @jsxImportSource @emotion/react */

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
  LandingBox1,
  // ArrowIcon
} from "./styles";
import { useNavigate} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {css} from '@emotion/react';

export const HeaderSet = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header onClick={()=>{navigate('/')}}>
        <LogoImg src="/imgs/logo.png"></LogoImg>
        <LoginSkipContainer>
          <LoginButton>
            <div
              onClick={() => {
                navigate("/login");
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
    </div>
  );
};

//랜딩 초기화면 컴포넌트 
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
    <div>
      <HeaderSet></HeaderSet>
      <div style={{ width: "100%", height: "auto" }}>
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          style={{
            width: "100%",
            height: "800px",
            backgroundColor:
              "linear-gradient(60deg, #F1F3EE 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
          }}
        >
          {/* <AnimatePresence> */}
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
                <Gifticon initial={{y:'17.5rem', translateX:'1rem'}} whileHover={{
                  x:[-5,5,-5,5],
                  transition:{ duration: 1, x: {yoyo: 2} }}}></Gifticon>
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
          {/* </AnimatePresence> */}
        </motion.div>
      </div>
    </div>
  );
};


// '/landing'페이지 컴포넌트
export const NextLanding=()=>{
  const HoverVariants = {hover:{scale: 1.07}}
  return(<div>
    {/* 헤더컴포넌트 */}
<HeaderSet></HeaderSet>
<motion.div css={css`
background-image:url('/imgs/index_Phone.png');
background-size: contain;
background-repeat:no-repeat;
transform:translateY(-25px);
background-position: center;
width: 100%;
height: 800px;
position:absolute;
z-index: 2;
scale:2.4;	pointer-events: none; 
`
}>

</motion.div>
{/* gradient 백그라운드(flex-container) */}
<div css={css`width:100vw;
height: calc(100vh - 134px);
background: rgb(245,246,242);
background: linear-gradient(180deg, rgba(245,246,242,1) 0%, rgba(255,255,255,1) 100%);
display:flex; 
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
`}>

  {/* 이미지박스 */}
  <LandingBox1 variants={HoverVariants} whileHover="hover"
  css={css`background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(234,237,235,1) 50%); z-index:2;
  `}>
  <div css={css` margin-top:50px;
    transform: rotate(15deg) translateX(1rem);
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/info_1st.png')`}></div>
      <h1 css={css`font-size:1rem; margin-bottom:50px;
      font-weight:bold;`}>미사용 기프티콘<span css={{fontWeight:'normal'}}>으로
      <br></br><h1>따뜻한 마음을 나누세요</h1></span>
      </h1>
    </LandingBox1>
    <LandingBox1 variants={HoverVariants} whileHover="hover"
    css={css`background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(234,237,235,1) 50%); z-index:2;
  `}>
  <div css={css` margin-top:50px;
    scale: 0.8;
    transform:translateX(1rem) translateY(-1rem);
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/info_2nd.png')`}></div>
      <h1 css={css`font-size:1rem; margin-bottom:50px;
      font-weight:bold;`}>미사용 기프티콘<span css={{fontWeight:'normal'}}>으로
      <br></br><h1>따뜻한 마음을 나누세요</h1></span>
      </h1>
    </LandingBox1>
    <LandingBox1 variants={HoverVariants} whileHover="hover"
    css={css`background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(234,237,235,1) 50%); z-index:2;
  `}>
  <div css={css` margin-top:50px;
    scale: 1.1;
    transform:translateY(-2rem) translateX(-2.5rem);
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/Rock_Sprit.png')`}></div>
      <h1 css={css`font-size:1rem; margin-bottom:50px;
      font-weight:bold;`}>미사용 기프티콘<span css={{fontWeight:'normal'}}>으로
      <br></br><h1>따뜻한 마음을 나누세요</h1></span>
      </h1>
    </LandingBox1>
    </div>
</div>)}

export default Home;
