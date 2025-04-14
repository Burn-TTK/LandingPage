import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import food from "../../assets/Food_3.png"

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
          <img src={food} />
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
    background: linear-gradient(to bottom, #1a1a1a, #fff6b4);
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  color: #222;
  font-weight: 800;
  margin-bottom: 0rem;
  letter-spacing: -1px;
  text-align: right; 
  
  @media (max-width: 768px) {
    font-size: 8vw;
    margin-right: 2%;
    color: white;
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
    color: white;
  }
`;


const ImageWrapper = styled.div`
  flex: 1;
  min-width: 45%;
  width: 280px;
  height: 280px;

  border-radius: 10%;

  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  

  img {
    width: 100%;
    height: 90%;
    object-fit: cover; 
  }

  img:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 200px;
    margin: 0 auto; 
    margin-bott
  }
`;