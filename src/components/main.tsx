/** @jsxImportSource @emotion/react */

import { useNavigate} from "react-router-dom";
import {motion, Variants} from "framer-motion";
import {css} from '@emotion/react';
import axios from 'axios';

import{
    LogoImg,
    LoginButton,
    SkipButton,
    LoginSkipContainer,
    Header,
}from "../Pages/Landing/styles";

import { 
  contentStyle,
  hoverSearchBoxStyles,  
  leftSidebarStyles,  
  rightSidebarStyles,  
  searchBoxStyles, 
  PostBox, 
  categoryBox,
  profileBox,
  leaderBoard
} from "./styles";

import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";

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
                { axios.defaults.headers.common['Cookie'] ? "log-out" : "log-in"}
              </div>
            </LoginButton>
          </LoginSkipContainer>
        </Header>
      </div>
    );
  };

  export const LeftSideBar = () =>{
    return(
      <div>
        <aside css={leftSidebarStyles}>
          <div css = {categoryBox}>CategoryBox</div>
        </aside>
      </div>
    );
  
  };
  
  export const RightSideBar = () =>{
    return(
      <div>
      <aside css={rightSidebarStyles}>
        <div css = {profileBox}>ProfileBox</div>
        <div css = {leaderBoard}>leaderBoard</div>
      </aside>
    </div>
    );
  };
  





  const Main = () => {
    return(
        <div css = {css`
        background: linear-gradient(to top, #FFFFFF 0%, #F1F3EE 100%);
        height: 100vh;`}>
            <div>
      <HeaderSet></HeaderSet>
      <div css={css`
        display: flex;
        flex-direction: row;
      `}>
        <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
            <div css={contentStyle}>
              <div css = {PostBox}></div>
              <div css = {PostBox}></div>
              <div css = {PostBox}></div>
              <div css = {PostBox}></div>
              <div css = {PostBox}></div>
              <div css = {PostBox}></div>
              
            </div>
      </div>
    </div>
      </div>
    );
};
export default Main;