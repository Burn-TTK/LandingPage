import React from "react";
import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Hooking = () => {
  // 버튼 클릭 시 Survey 섹션으로 스크롤 이동하는 함수 -> survey 컴포넌트 id 설정 필요
  const scrollToSurvey = () => {
    const surveySection = document.getElementById("surveySection");
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <TextContainer>
        <Text>"사장님 언제 나와요?"</Text>
        <SemiText>더이상 물어보지 마세요!</SemiText>
      </TextContainer>
      <Reservation onClick={scrollToSurvey}>
        미리주문하고 싶은 식당 신청하기
      </Reservation>
    </Container>
  );
};

export default Hooking;

// styled-components를 이용한 스타일 정의
const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin bottom- 10%;
`;

const TextContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 10vw;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  
  padding: 2rem 4rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100px; /* 모바일 화면 전체에 꽉 채우기 */
  
  @media (max-width: 768px) {

    padding: 1rem 2rem;
    width: 90vw;
  }
  animation: ${fadeIn} 1s ease-out;
`;

const Text = styled.h1`
  font-size: 3rem;
  color: #333;
  margin: 0;
  animation: ${fadeIn} 1.5s ease-out;
  
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const SemiText = styled.h2`
  font-size: 1.5rem;
  color: #555;
  animation: ${fadeIn} 2s ease-out;
  
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const Reservation = styled.button`
  background: linear-gradient(45deg, #ff8a00, #e52e71);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 2rem 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 2s infinite;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: linear-gradient(45deg, #e52e71, #ff8a00);
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 6vw;
    margin-bottom: 10%;
  }
`;