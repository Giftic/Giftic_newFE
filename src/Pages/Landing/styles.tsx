import styled from '@emotion/styled';
import {motion} from 'framer-motion';
//Header
export const Header = styled.div({width:'87%',
height:'auto',
background:'#F2F5F0',
display:'flex',
justifyContent:'space-between',
padding: '0 6.5%'});
  
//giftic 로고이미지
export const LogoImg = styled.img({width:'120px',
height:'70px', padding:'2rem 0px'});

//로그인화면 이동버튼 useNavigate('/login') e.handler달기;
export const LoginButton = styled.div({color:'#B3C79D',
border:'2px solid #B3C79D',
width: '88px',
height: '2rem',borderRadius: '18px',
textAlign: 'center',
margin: 'auto 0 ',
dispaly:'flex',
alignItems: 'center',
lineHeight: '2rem',
fontSize: '1rem',
})

//홈으로 애니메이션 skip버튼
export const SkipButton = styled.div({width:'69px',height:'32px',
borderRadius:'2rem',
background:'#B3C79D',
color:'white',
fontSize:'1rem',
lineHeight:'32px',
textAlign:'center',
margin:'auto 0 auto 20px',
alignItem:'center' });


export const LoginSkipContainer = styled.div({display:'flex'});

//`calc(100% - 300px)`
export const IphoneContainer = styled(motion.div)({width:'auto', 
zIndex:'1',height:'auto',
display:'flex',justifyContent:'center'})

export const Iphone = styled(motion.div)({zIndex:'1',backgroundImage: `url("/imgs/index_Phone.png")`,position:'absolute', scale:'1.3',
width:'50vw',height:`74.5vh`,
backgroundRepeat:'no-repeat',
backgroundPosition:'50% 1px'});

export const StartText = styled.div({
  flexDirection:'column',
  display:'flex',justifyContent:'center',
  alignItems:'center',position:'absolute',
  top:'49%',zIndex:'2',
})
export const StartButton = styled(motion.div)({
  width:'90px',height:'32px',fontSize:'1rem',
  position:'absolute',top:'560px',
  zIndex:'2',
  lineHeight:'2rem',textAlign:'center',
  background:'#B3C79D',color:'white',borderRadius:'1rem'
})

export const Gifticon = styled.div({
  width:'500px',height:'340px', backgroundImage: `url("/imgs/info_1st.png")`,zIndex:'1',position:'absolute',
  top:'150%',right:'-45%',
  backgroundRepeat:'no-repeat',backgroundPosition:'center',
  backgroundSize:'contain',boxSizing:'border-box'
})


