import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import food from "../../assets/Food_3.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
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
      <GradientOverlay />
      <ContentWrapper>
        <ImageContainer>
          <FoodImage src={food} alt="음식 이미지" />
        </ImageContainer>
        <TextContainer>
          <Heading>
            도착해서 바로먹자!
          </Heading>
          <Description>
            예약하고 도착하면, <br />
            기다림 없이 바로 식사!<br />
            <br />
            쁘레로 시간 절약하고, <br />
            여유롭게 커피 마시자!<br />
          </Description>
          <Accent />
        </TextContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SectionB;

// ===== 스타일 =====

const SectionContainer = styled.div`
  position: relative;
  padding: 8rem 4rem;
  margin: 6rem 0;
  background: transparent;
  color: white;
  border-radius: 16px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeInUp} 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    `}

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    margin: 3rem 1rem;
    border-radius: 12px;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none;
  z-index: 1;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

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

const Description = styled.p`
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
  }
`;

const Accent = styled.div`
  position: absolute;
  top: 1rem;
  right: -2rem;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 154, 68, 0.15) 0%, rgba(252, 96, 118, 0.15) 100%);
  filter: blur(25px);
  animation: ${shimmer} 6s infinite linear;
  background-size: 400% 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  transform: perspective(1000px) rotateY(5deg) rotateX(-2deg);
  transition: all 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateY(2deg) rotateX(-1deg) translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
