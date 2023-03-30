import { css } from "@emotion/react";
import styled from '@emotion/styled';

/* 검색창 styles */

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
background-position: 95% 50%; 
background-size: 25px;
`;

/* 왼쪽 SideBar styles */

export const leftSidebarStyles = css`
  position: fixed;
  top: 15vh;
  bottom: 0;
  left: 0;
  width: 300px;
`;

export const categoryBox= css `
  position: relative;
  top: 8%;
  left: 30%;
  width: 10vw;
  height: 30vh;
  background-color:grey;
  z-index:2;
`;



/* 오른쪽 SideBar styles */
export const rightSidebarStyles = css`
  position: fixed;
  top: 15vh;
  bottom: 0;
  right: 0;
  width: 30%;
`;

export const profileBox = css `
position: relative;
top: 3%;
right: -19%;
width: 16vw;
height: 19vh;
z-index:2;
background: #F5F6F4 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 20px #00000029;
border-radius: 13%;
opacity: 1;
`;

export const leaderBoard = css `
position: relative;
margin-top: 9%;
right: -19%;
width: 16vw;
height: 30vh;
z-index:2;
background: #D2D9C9 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 20px #00000029;
border-radius: 13%;
opacity: 1;
`;
/* Contents영역 styles */

export const contentStyle = css`
position: absolute;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: calc(200vh - 50px);
  overflow-y: scroll;
  z-index:0;
`;

export const PostBox = css`
position: relative;
top: 0;
left: 0;
right: 0;
margin:auto;
margin-top: 3%;
width: 42vw;
height: 14vh;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 20px #00000021;
background-image: url('/imgs/Post_sample.png');
background-position: 2.7% 50%; 
background-size: 15%;
border-radius: 30px;
opacity: 1;
&:hover {
  background-color: #667556;
  color: #fff;
}`;

/* 밑에는 post.tsx관련 styles 나중에 분할예정 */


export const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

export const PostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const PostInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  font-size: 16px;
`;

export const PostTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  font-size: 16px;
  resize: none;
`;

export const PostButton = styled.button`
  padding: 10px;
  background-color: #0077cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;