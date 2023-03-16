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
import {motion } from "framer-motion";
import {css} from '@emotion/react';

//헤더 컴포넌트 
export const HeaderSet = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <LogoImg onClick={()=>{navigate('/')}}src="/imgs/logo.png"></LogoImg>
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
      <div style={{ width: "100%", height: '100vh' }}>
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          style={{
            backgroundColor:
              "linear-gradient(180deg, #F1F3EE 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
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
                <Gifticon initial={{translateX:'1rem'}} whileHover={{
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
  const HoverVariants = {hover:{scale: 1.07} }
  const navigate =useNavigate();
  return(<div>
    {/* 헤더컴포넌트 */}
<HeaderSet></HeaderSet>

{/* gradient 백그라운드(flex-container) */}
<div onClick={()=>{navigate('/')}} css={css`width:100vw;
height: calc(100vh);
background: rgb(245,246,242);
background: linear-gradient(180deg, rgba(245,246,242,1) 0%, rgba(255,255,255,1) 100%);
display:flex; 
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
`}>

<div css={css`width:130px; height:130px;
background-image: url('/imgs/left.png');
background-repeat:no-repeat;
background-size:cover;
`}></div>

  {/* 1st */}
  <LandingBox1 variants={HoverVariants} whileHover="hover" 
  // initial,animate prop의 x와 y값을 조정하면 초기위치를 지정해줄 수 있음
initial={{opacity: 0, zIndex:'3', x: "25vw" ,y: "0%" }} animate={{opacity: 1, x:"0", y: "0%", transition:{duration:1, ease: 'easeInOut' }}}
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

    {/* 2nd */}
    <LandingBox1 variants={HoverVariants} whileHover="hover"
    initial={{y:"-100%"}}
    animate={{ y:"0%",transition:{type: 'spring',duration: 1, stiffness:250}}}
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
{/* 아이폰 배경을 2번째 순서의 요소로 배치 - framer 적용위해 */}
    <motion.div initial={{opacity:0}} animate={{transition:{ delay:0.5,duration:1}, opacity:1}}css={css`
background-image:url('/imgs/index_Phone.png');
background-size: 136%;
background-repeat:no-repeat;
background-position: center center;
width: 100vmax;
height: calc(100vh);
position:absolute;
dipslay:flex;
z-index: 1;
scale:1;	pointer-events: none; 
`
}>
</motion.div>

    <LandingBox1 variants={HoverVariants} whileHover="hover" initial={{y:"-100%"}}
    animate={{ y:"0%",transition:{type: 'spring',duration: 1, stiffness:200}}}
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
 
    <div css={css`width:130px; height:130px;
background-image: url('/imgs/right.png');
background-repeat:no-repeat;
background-size:cover;
`}></div>
    </div>
</div>)}

export default Home;
