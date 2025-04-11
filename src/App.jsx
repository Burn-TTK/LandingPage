import React from "react"
import Hooking from "./components/Hooking";
import Information from "./components/Information";
import Survey from "./components/Survey/Survey";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Page>
      <IU>똥</IU>
      <Hooking />
      <Information />
      <Survey />
      <Footer />
    </Page>
  );
};

export default App;

const Page = styled.div`
  margin: 0;
  color: black;
`;

const IU = styled.p`
  color: black;
`;