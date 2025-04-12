// Survey.jsx - 설문 컴포넌트 메인 컨테이너
import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./InputSection";
import PolicyConsent from "./PolicyConsent";
import StoreButtons from "./StoreButton";
import axios from "axios";

const Survey = () => {
    const [isOpen, setIsOpen] = useState(false);                    // 개인정보동의 "자세히 보기" 토글 상태
    const [isSecondEnabled, setIsSecondEnabled] = useState(false);  // 전화번호 입력창 활성화 여부
    const [isAgreed, setIsAgreed] = useState(false);                // 개인정보 수집 동의 여부

    return (
        <Wrapper>
            <InputSection
                label="미리 주문 체험을 하고싶은 식당을 입력하세요!!"
                onSend={(value) => {
                    axios.post("http://localhost:5000/restaurant", { name: value });

                    // 식당명 입력 시 전화번호 입력창 활성화
                    setIsSecondEnabled(true);
                }}
            />
            <InputSection
                label="실제로 체험을 원하시면 전화번호 남겨주세요"
                disabled={!isSecondEnabled}      // 식당 입력 전까지는 입력 칸 비활성화
                type="phone"                     // 전화번호 입력 포맷 적용
                requireConsent={true}            // Input이 개인정보 동의를 필요로 하냐?
                isAgreed={isAgreed}              // 현재 동의 상태 전달
                onSend={(value) => {
                    // 전화번호 서버 전송
                    axios.post("http://localhost:5000/phone", { phone: value });
                }}
            />

            <PolicyConsent
                isOpen={isOpen}             // "자세히 보기" 섹션이 열려 있는지 여부
                setIsOpen={setIsOpen}
                isAgreed={isAgreed}         // 개인정보 수집 동의 체크 여부 (체크박스 상태)
                setIsAgreed={setIsAgreed}   // 체크박스 변경 시 호출할 상태 변경 함수
            />
            <StoreButtons />
        </Wrapper>
    );
};


export default Survey;

// Survey 전체 래퍼 스타일
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
