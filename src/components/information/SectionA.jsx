import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ui from "../../assets/UI_3.png";


const SectionA = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver를 사용하여 섹션이 뷰포트에 들어오면 visible 상태를 true로 변경합니다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // 한 번 나타나면 더 이상 감시하지 않습니다.
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
    // `$visible` prop을 전달하여 styled-components에서만 사용하고 실제 DOM에는 전달되지 않습니다.
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
        <img src={ui} alt="모바일 UI 예시 이미지" />
      </ImageWrapper>
    </SectionContainer>
  );
};

export default SectionA;

// 스타일용 컴포넌트: `$visible` prop은 DOM에 전달되지 않습니다.
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 6rem;
//   background: linear-gradient(135deg, #fff 0%, #f9f9f9 25%);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  /* $visible prop이 true이면 opacity와 transform을 변경하여 fade in/up 효과를 나타냅니다. */
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media (max-width: 768px) {
    flex-direction: row;  /* 열이 아닌 행 배치를 유지 */
    flex-wrap: wrap;      /* 공간이 부족하면 줄바꿈을 허용 */
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
  background-color: rgba(0, 0, 0, 0); /* 명시적으로 투명하게 지정 */
  // box-shadow: 0 4px 10px rgba(22, 20, 20, 0.1);
  overflow: hidden; /* 내부 이미지가 원형 영역을 벗어나지 않도록 처리 */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 77.5%;
    object-fit: cover; /* 이미지의 비율을 유지하며 채움 */
    /* border-radius는 부모의 overflow: hidden으로 처리되므로 별도 설정 불필요 */
  }

  @media (max-width: 768px) {
    width: 60vw;
    height: 40vh;
    margin: 0 auto; /* 중앙 정렬 */
  }
`;