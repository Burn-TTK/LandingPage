// HookingModern.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import '../styles/fonts.css';


const HookingModern = () => {
  const scrollToSurvey = () => {
    const surveySection = document.getElementById("surveySection");
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <TextSection>
          <MainHeadline>"사장님 언제 나와요?"</MainHeadline>
          <SubHeadline>더이상 물어보지 마세요!</SubHeadline>
        </TextSection>

        <ActionSection>
          <CTAButton onClick={scrollToSurvey}>
            미리주문하고 싶은 식당 신청하기
          </CTAButton>
        </ActionSection>


      </Wrapper>
    </Container>
  );
};

export default HookingModern;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  font-family: 'NanumSquare', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TextSection = styled.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

const MainHeadline = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SubHeadline = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #555;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.2s;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #FFE15D, #F9D923);
  color: #222;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(249, 217, 35, 0.25);
  text-align: center;

  &:hover, &:focus {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(249, 217, 35, 0.35);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.9rem 1.5rem;
  }
`;

