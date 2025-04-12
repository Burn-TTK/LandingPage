import React from "react";
import Hooking from "./components/Hooking";
import Information from "./components/Information";
import Survey from "./components/Survey";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Page>
      <Background />
      <Hooking/>
      <Information/>
      <Survey/>
      <Footer/>
    </Page>
  );
}

export default App;

const Page = styled.div`
  margin: 0;
  color: black;
  position: relative;       /* 자식 요소들 위에 배경을 배치하기 위한 설정 */
  min-height: 100vh;
  overflow: hidden;         /* 배경 블러 이펙트가 벗어나지 않도록 함 */
`;

/* Background 컴포넌트를 별도로 만들어, Page의 배경으로 사용합니다.
   linear-gradient()로 검정에서 노랑으로 변하는 그라데이션을 적용하고,
   filter: blur()로 블러 효과를 줍니다. */
   const Background = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
 

   filter: blur(12px);
   opacity: 0.8;
   z-index: -1;
 `;