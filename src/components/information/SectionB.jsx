import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import food from "../../assets/Food_1.jpg"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionB = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer ref={ref} visible={visible}>
      <Heading>도착해서 바로먹자!</Heading>
      <Content>
        <ImageWrapper>
          <img src={food} alt="모바일 UI 예시 이미지" />
        </ImageWrapper>
        <TextContainer>
        <Description>
          
          예약하고 도착하면, <br/>
          기다림 없이 바로 식사!<br />
          <br/>
          쁘레로 시간 절약하고, <br/>
          여유롭게 커피 마시자!<br />
        </Description>
        </TextContainer>
      </Content>
    </SectionContainer>
  );
};

export default SectionB;

const SectionContainer = styled.div`
  display: flex;
  
  padding: 4rem 6rem;
//   background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeInUp} 0.6s ease-out forwards;
    `}
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
    gap: 2rem;
    margin-top: -3rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  color: #222;
  font-weight: 800;
  margin-bottom: 0rem;
  letter-spacing: -1px;
  text-align: right; /* 모바일에서도 오른쪽 정렬 유지 */
  
  @media (max-width: 768px) {
    font-size: 8vw;
    margin-right: 2%;
  }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3vw;
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 45%;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;



const Description = styled.p`
  font-size: 1.6rem;
  color: #666;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.0rem;
    text-align: left;
  }
`;


const ImageWrapper = styled.div`
  flex: 1;
  min-width: 45%;
  width: 280px;
  height: 280px;

  border-radius: 10%;
  background-color: #fafafa;
  box-shadow: 0 4px 10px rgba(22, 20, 20, 0.1);
  overflow: hidden; /* 내부 이미지가 원형 영역을 벗어나지 않도록 처리 */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지의 비율을 유지하며 채움 */
    /* border-radius는 부모의 overflow: hidden으로 처리되므로 별도 설정 불필요 */
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 200px;
    margin: 0 auto; /* 중앙 정렬 */
  }
`;