/** @jsxImportSource @emotion/react */

import { useNavigate} from "react-router-dom";
import {motion, Variants} from "framer-motion";
import {css} from '@emotion/react';

import{
    LogoImg,
    LoginButton,
    SkipButton,
    LoginSkipContainer,
    Header,
}from "../Pages/Landing/styles";
import { useState } from "react";


const searchBoxStyles = css`
  width: 600px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

const hoverSearchBoxStyles = css`
  width: 620px;
  height: 35px;
  border-radius: 120px;
  border: 2px solid #333;
  padding: 15px;
  font-size: 18px;
`;

const searchBoxVariants: Variants = {
  default: {
    scale: 1,
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

export function SearchBox() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <motion.input
      type="text"
      css={isHovered ? hoverSearchBoxStyles : searchBoxStyles}
      placeholder="Search"
      variants={searchBoxVariants}
      initial="default"
      whileHover="hover"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    />
  );
}



export const HeaderSet = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Header>
          <LogoImg onClick={()=>{navigate('/')}}src="/imgs/logo.png"></LogoImg>
          <SearchBox></SearchBox>
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
          
          </LoginSkipContainer>
        </Header>
      </div>
    );
  };
  const Main = () => {
    return(
        <div css = {css`background: linear-gradient(to top, #FFFFFF 0%, #F1F3EE 100%);
        height: 100vh;`}>
            <HeaderSet></HeaderSet>
        </div>
        
    );
};



export default Main;


