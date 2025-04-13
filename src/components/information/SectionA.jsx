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
    <Heading>아직도 전화주문 하세요?</Heading>
      <TextContainer>
        <SubHeading>이제는 쁘레로 간편하게!</SubHeading>
        <Des>
          원하는 식당 지도에서 찾고<br/>
          걸어가면서 주문하자!
        </Des>
      </TextContainer>
      <ImageWrapper>
        <img src={ui} />
      </ImageWrapper>
    </SectionContainer>
  );
};

export default SectionA;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 6rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media (max-width: 768px) {
    flex-direction: row; 
    flex-wrap: wrap;      
    padding: 2rem;
    margin-left: 1%;
    margin-right: 1%;


  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  color: #222;
  font-weight: 800;
  margin-bottom: -1rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const TextContainer = styled.div`
  margin-top: 15%;
  flex: 1;
  min-width: 45%;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  color: black;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.0rem;
  }
`;

const Des = styled.div`
  @media (max-width: 768px) {
    color: #555;
    margin-top: 0.8rem;
    font-size: 3.5vw;
    line-height: 1.4;
    font-size: 0.9rem;
  }
`

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 55%;
  width: 280px;
  height: 280px;

  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0); 
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 77.5%;
    object-fit: cover; 
  }

  @media (max-width: 768px) {
    width: 60vw;
    height: 40vh;
    margin: 0 auto; 
  }
`;