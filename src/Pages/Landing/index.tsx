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
                navigate("/signup");
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
    <div  css = {css`background: linear-gradient(to top, #FFFFFF 50%, #F1F3EE 100%);
    height: 100vh;`}>
      <HeaderSet></HeaderSet>
      <div style={{ width: "100%", height: '100vh' }}>
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.3 } }}>
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
<div /*onClick={()=>{navigate('/')}}*/ css={css`width:100vw;
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
background-repeat:no-repeat;ㅇ
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
 
    <div 
      onClick={() => {
        navigate("/step1");
      }}
    css={css`width:130px; height:130px;
              background-image: url('/imgs/right.png');
              background-repeat:no-repeat;
              background-size:cover;`}>
      </div>
    </div>
</div>)}


const Step1 = {
  Bubble1: css `
    position: absolute;
    top: 30%;
    right: 21%;
    scale: 3.2;
    z-index:1;
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/Bubble.png')`,
  Bubble2: css`
    position: absolute;
    top: 60%;
    right: -5%;
    z-index:1;
    scale: 2.5;
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/Bubble.png')`,
  Bubble3: css`
    position: absolute;
    bottom: -10%;
    right: 22%;
    z-index:1;
    scale: 1.5;
    width:250px; height:250px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/Bubble.png')`,
  Gesture: css`
    top: 19%;
    left: 22%;
    position: relative;
    transform: rotate(0.95turn);
    z-index:1;
    width:140px; height:140px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/One.png');`,
};
const Step2 = {
  Bubble1: css `
  position: absolute;
  top: 33%;
  right: 9%;
  scale: 3.2;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Bubble2: css`
  position: absolute;
  bottom: 23.4%;
  left: 48%;
  scale: 2.2;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Bubble3: css`
  position: absolute;
  bottom: -8%;
  right: 22%;
  scale: 1.4;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Gesture: css`
  position: relative;
  left:4%;
  bottom: 5%;
  scale: 0.55;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Two.png')`,
};
const Step3 = {
  Bubble1: css `
  position: absolute;
  top: 50%;
  right: 23%;
  scale: 3.2;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Bubble2: css`
  position: absolute;
  top:20%;
  right: 0%;
  scale: 2.2;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Bubble3: css`
  position: absolute;
  bottom: -8%;
  right: -5%;
  scale: 1.4;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Bubble.png')`,
  Gesture: css`
  position: relative;
  left:4%;
  bottom: 5%;
  scale: 0.55;
  z-index:1;
  width:250px; height:250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/imgs/Three.png')`,
};
const Step = {
  container: css `
    position: relative;
    height: 100vh;
    width: 100vw; 
    overflow: hidden;
    background: linear-gradient(to top, #F1F3EE 0%, #F1F3EE 100%);
    `,
  step: css`
    position: absolute;
    left:8%;
    top: 30%;
    scale: 0.60;
    z-index:1;
    width:400px; height:400px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/imgs/Step.png')`,
  button: css`
    position: absolute;
    top:43%;
    right:3.4%;
    scale:1;
    width:130px; height:130px;
    background-image: url('/imgs/right.png');
    background-repeat:no-repeat;
    background-size:cover;
    z-index:2;`,
  title1: css`
      position: relative;
      left: 21%;
      top:1%;
      color: white;
      z-index:2;
      font-size: xxx-large;
    `,
  title2: css`
        position: relative;
        top: 10%;
        left: 23%;
        font: normal normal bold 36px/32px Elice DigitalBaeum OTF;
        letter-spacing: -0.36px;
        color: #292929;
        z-index:2;
      `,
  des: css`
        position: relative;
        left:23%;
        top:15%;
        color: black;
        z-index:2;
        white-space:nowrap;
        font: normal normal normal 22px/32px Noto Sans CJK KR;
    `,
}

export const StepLanding1 = () => {
  const navigate = useNavigate();

  return (
    <div css = {Step.container}>
      <HeaderSet></HeaderSet>
        <div css = {css`
        position: absolute;
        left:8%;
        top: 18%;
        width:40vw; 
        height:50vh;`}>
          <div css = {Step.step}>
            <div css = {Step.title1}>STEP 1</div>
            <div css = {Step.title2}>기부 게시글을 등록하세요.</div>
            <div css = {Step.des}>실시간으로 업데이트되는 기부를 확인하세요.</div>
          </div>
        </div>
        <div css={Step1.Bubble1}>
          <div css={Step1.Gesture}></div>
        </div>
        <div css={Step1.Bubble2}></div>
        <div css={Step1.Bubble3}></div>
          <div css={Step.button} onClick={() => {
              navigate("/step2");
            }}></div>
      </div>
  );
};

export const StepLanding2 = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      position:"relative", 
      height:"100vh",
      width:"100vw",
      overflow:"hidden",
      background:
      "linear-gradient(to top, #F1F3EE 0%, #F1F3EE 100%)",}}>
      <HeaderSet></HeaderSet>
      
      <div css = {css`
        position: absolute;
        left:8%;
        top: 14%;
        width:40vw; 
        height: 50vh;
        opacity: 0.3;`}>
          <div css = {Step.step}>
            <div css = {Step.title1}>STEP 1</div>
            <div css = {Step.title2}>기부 게시글을 등록하세요.</div>
          </div>
        </div>

      <div css = {css`
        position: absolute;
        left:8%;
        top: 30%;
        width:40vw; 
        height: 50vh;`}>
      <div css = {Step.step}>
        <div css = {Step.title1}>STEP2</div>
        <div css = {Step.title2}>기부를 진행하고 신청하세요.</div>
        <div css = {Step.des}>실시간으로 업데이트되는 기부를 확인하세요.</div>
        </div>
        </div>
        <div css={Step2.Bubble1}>
          <div css={Step2.Gesture}>
          </div>
        </div>
        <div css={Step2.Bubble2}></div>
        <div css={Step2.Bubble3}></div>
        <div css={Step.button} 
        onClick={() => {navigate("/step3");
          }}></div>

      </div>
  );
};

export const StepLanding3 = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      position:"relative", 
      height:"100vh",
      width:"100vw",
      overflow:"hidden",
      background:
      "linear-gradient(to top, #F1F3EE 0%, #F1F3EE 100%)",
      }}>
      <HeaderSet></HeaderSet>
      <div 
      css = {css`
        position: absolute;
        left:8%;
        top: 14%;
        width:40vw; 
        height: 50vh;
        opacity: 0.3;`}>
          <div css = {Step.step}>
            <div css = {Step.title1}>STEP 2</div>
            <div css = {Step.title2}>기부를 진행하고 신청하세요.</div>
          </div>
        </div>

      <div css = {css`
        position: absolute;
        left:8%;
        top: 30%;
        width:40vw; 
        height: 50vh;`}>
      <div css = {Step.step}>
        <div css = {Step.title1}>STEP3</div>
        <div css = {Step.title2}>따뜻한 마음을 받으세요.</div>
        <div css = {Step.des}>매칭이 완료되면 기프티콘으로 마음을 받아요</div>
        </div>
        </div>
        <div css={Step3.Bubble1}>
          <div css={Step3.Gesture}>
          </div>
        </div>
        <div css={Step3.Bubble2}></div>
        <div css={Step3.Bubble3}></div>
        <div css={Step.button} onClick={() => {
            navigate("/home");
          }}></div>
        </div>
  );
};


export default Home;
