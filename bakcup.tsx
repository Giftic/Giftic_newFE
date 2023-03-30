/**commit 904f75d166c67adb8240ffbb34a8d49921485b3c
Merge: 67bb22c 1662cd4
Author: Ezcho <ezcho886@naver.com>
Date:   Sat Mar 25 15:56:05 2023 +0900

    On dongyoung/main: !!GitHub_Desktop<dongyoung/main>

diff --cc src/Pages/Landing/styles.tsx
index aa5c422,aa5c422..de11544
--- a/src/Pages/Landing/styles.tsx
+++ b/src/Pages/Landing/styles.tsx
@@@ -11,8 -11,8 +11,8 @@@ padding: '0 6.5%',zIndex: '0'})
  
    
  //giftic 로고이미지
--export const LogoImg = styled.img({width:'120px', 
--height:'70px', padding:'2rem 0px'});
++export const LogoImg = styled.img({width:'100px', 
++ padding:'2rem 0px'});
  
  //로그인화면 이동버튼 useNavigate('/login') e.handler달기;
  export const LoginButton = styled.div({color:'#B3C79D',
diff --cc src/components/main.tsx
index 7d19cea,7d19cea..2075d69
--- a/src/components/main.tsx
+++ b/src/components/main.tsx
@@@ -12,26 -12,26 +12,15 @@@ import
      Header,
  }from "../Pages/Landing/styles";
  import { useState } from "react";
++import { 
++  hoverSearchBoxStyles, 
++  searchBoxStyles,
++   MainBox, 
++   PostBox, 
++   CategoryBox,
++   RankingBox} from "./styles";
  
  
--const searchBoxStyles = css`
--  width: 600px;
--  height: 30px;
--  border-radius: 100px;
--  border: 1px solid #ccc;
--  padding: 10px;
--  font-size: 16px;
--`;
--
--const hoverSearchBoxStyles = css`
--  width: 620px;
--  height: 35px;
--  border-radius: 120px;
--  border: 2px solid #333;
--  padding: 15px;
--  font-size: 18px;
--`;
--
  const searchBoxVariants: Variants = {
    default: {
      scale: 1,
@@@ -49,21 -49,21 +38,26 @@@ export function SearchBox() 
    const handleHoverEnd = () => setIsHovered(false);
  
    return (
--    <motion.input
--      type="text"
--      css={isHovered ? hoverSearchBoxStyles : searchBoxStyles}
--      placeholder="Search"
--      variants={searchBoxVariants}
--      initial="default"
--      whileHover="hover"
--      onMouseEnter={handleHoverStart}
--      onMouseLeave={handleHoverEnd}
--    />
++    <div css={css`
++    position: relative;
++    top: 10%;
++    left: 0;
++    right: 0;
++    margin: auto;
++  `}>
++      <motion.input
++        type="text"
++        css={isHovered ? hoverSearchBoxStyles : searchBoxStyles}
++        variants={searchBoxVariants}
++        initial="default"
++        whileHover="hover"
++        onMouseEnter={handleHoverStart}
++        onMouseLeave={handleHoverEnd}
++      />
++    </div>
    );
  }
  
--
--
  export const HeaderSet = () => {
      const navigate = useNavigate();
      return (
@@@ -90,14 -90,14 +84,27 @@@
    };
    const Main = () => {
      return(
--        <div css = {css`background: linear-gradient(to top, #FFFFFF 0%, #F1F3EE 100%);
++        <div css = {css`
++        background: linear-gradient(to top, #FFFFFF 0%, #F1F3EE 100%);
          height: 100vh;`}>
              <HeaderSet></HeaderSet>
++            <Post></Post>
          </div>
          
      );
  };
  
++export const Post = () =>{
++
++  return(
++    <div css={MainBox}>
++      <div css = {PostBox}></div>
++      <div css = {CategoryBox}></div>
++      <div css = {RankingBox}></div>
++    </div>
++  );
++}
++
  
  
  export default Main;
*/
