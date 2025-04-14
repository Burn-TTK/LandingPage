// App.js
import React from "react"
import Hooking from "./components/Hooking";
import Information from "./components/Information";
import Survey from "./components/Survey/Survey";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Page>
      <Hooking />
      <Information />
      {/* 자동 스크롤 */}
      <section id="surveySection" />
      <Survey />
      <Footer />
    </Page>
  );
};

export default App;

const Page = styled.div`
  margin: 0;
  color: black;
  background: linear-gradient(to bottom, #ffffff, #fff6b4);
  position: relative;
  min-height: 100vh;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    pointer-events: none;
  }
`;