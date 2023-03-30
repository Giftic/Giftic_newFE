import { css } from "@emotion/react";
import styled from '@emotion/styled';

export const searchBoxStyles = css`
position: relative;
top: 5vh;  
width: 41vw;
height: 1.8vh;
border-radius: 80px;
border: none;
padding: 10px;
font-size: 16px;
background-image: url('/imgs/searchIcon.png');
background-repeat: no-repeat;
background-position: 95% 50%; 
background-size: 20px;
`;

export const hoverSearchBoxStyles = css`
position: relative;
top: 4vh;
width: 42vw;
height: 2.0vh;
border-radius: 80px;
border: none;
padding: 15px;
font-size: 18px;
background-image: url('/imgs/searchIcon.png');
background-repeat: no-repeat;
background-position: 90% 50%; 
background-size: 25px;
`;

export const leftSidebarStyles = css`
  position: fixed;
  top: 15vh;
  bottom: 0;
  left: 0;
  width: 300px;
  background-color:white;
`;
export const rightSidebarStyles = css`
  position: fixed;
  top: 15vh;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color:white;
`;

export const contentStyles = css`
  top: 15vh;

  overflow-y: auto;
  height: 200vh;
`;
