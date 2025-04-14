// SectionA.js
import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ui from "../../assets/UI_3.png";

const SectionA = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver를 사용하여 섹션이 뷰포트에 들어오면 visible 상태를 true로 변경합니다.
    // 스크롤 화면 노출
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // 1회성 
        }
      },
      { threshold: 0.3 } // 30% 이상 노출 시 trigger
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer ref={ref} $visible={visible}>
      <ContentWrapper>
        <TextBlock>
          <Heading>
            아직도 전화로
            <br />
            <span style={{ marginTop: '1.0rem', display: 'inline-block' }}>
              미리주문 하세요?
            </span>
          </Heading>
          <SubHeading>이제는 쁘레로 간편하게!</SubHeading>
          <Description>
            원하는 식당 지도에서 찾고<br />
            걸어가면서 주문하자!
          </Description>
        </TextBlock>
        <ImageContainer>
          <ImageFrame>
            <img src={ui} alt="앱 UI 화면" />
          </ImageFrame>
        </ImageContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SectionA;

const SectionContainer = styled.div`
  position: relative;
  padding: 3rem 4rem;
  margin: 2rem 0;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: none;
    z-index: 0;
  }
  
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
    
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    margin: 1rem;
    border-radius: 12px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  padding-right: 0 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 2.0rem;
  color: #333;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  line-height: 1.1;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #ff9a44 0%, #fc6076 100%);
    margin-top: 1rem;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    
    &::after {
      margin: 1rem auto 0;
    }
  }
`;

const SubHeading = styled.h3`
  font-size: 1.8rem;
  color: #555;
  font-weight: 600;
  margin-bottom: 1.5rem;

  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.4rem;
  color: #666;
  line-height: 1.8;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageFrame = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transform: perspective(1000px) rotateY(-5deg) rotateX(3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(-2deg) rotateX(1deg) translateY(-10px);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.15), 0 15px 25px rgba(0, 0, 0, 0.08);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;
