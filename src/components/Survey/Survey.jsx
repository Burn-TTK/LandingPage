import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./InputSection";
import PolicyConsent from "./PolicyConsent";
import StoreButtons from "./StoreButton";
import axios from "axios";

const Survey = () => {
    const [isOpen, setIsOpen] = useState(false);                   // 개인정보 동의 모달 열림 여부
    const [isSecondEnabled, setIsSecondEnabled] = useState(false); // 전화번호 입력 영역 활성화 여부
    const [isAgreed, setIsAgreed] = useState(false);               // 개인정보 수집 동의 여부
    const [restaurantName, setRestaurantName] = useState("");      // 입력한 식당 이름
    const [phoneSubmitted, setPhoneSubmitted] = useState(false);   // 전화번호 제출 완료 여부

    // 식당 이름을 제출할 때 호출
    const handleRestaurantSubmit = (value) => {
        setRestaurantName(value);
        axios.post("http://localhost:5000/restaurant", { name: value });
        setIsSecondEnabled(true); // 전화번호 입력 영역 활성화
    };

    // 전화번호를 제출할 때 호출
    const handlePhoneSubmit = (value) => {
        axios.post("http://localhost:5000/phone", { phone: value });
        setPhoneSubmitted(true); // 제출 완료 메시지 표시용
    };

    return (
        <SurveyContainer>
            <SectionTitle>주문 체험 신청</SectionTitle>

            <FormContainer>
                {/* 식당 입력 영역 */}
                <InputSection
                    label="미리 주문 체험을 하고싶은 식당을 입력하세요"
                    placeholder="식당 이름 입력"
                    onSend={handleRestaurantSubmit}
                />

                {/* 식당 등록 성공 메시지 */}
                {isSecondEnabled && (
                    <SuccessMessage>
                        <HighlightText>{restaurantName}</HighlightText>이(가) 등록되었습니다!
                    </SuccessMessage>
                )}

                {/* 전화번호 입력 영역 (식당 등록 후에만 표시) */}
                <ContactSection show={isSecondEnabled}>
                    <InputSection
                        label="실제로 '미리주문'서비스를 체험하고 싶다면 번호를 남겨주세요"
                        placeholder="010-0000-0000"
                        disabled={!isSecondEnabled}
                        type="phone"
                        requireConsent={true}
                        isAgreed={isAgreed}
                        onSend={handlePhoneSubmit}
                    />

                    {/* 개인정보 수집 동의 체크 및 내용 보기 */}
                    <PolicyConsent
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isAgreed={isAgreed}
                        setIsAgreed={setIsAgreed}
                    />

                    {/* 전화번호 제출 완료 메시지 */}
                    {phoneSubmitted && (
                        <PhoneSuccessMessage>
                            실제 체험을 위해 곧 연락드리겠습니다!
                        </PhoneSuccessMessage>
                    )}
                </ContactSection>
            </FormContainer>

            {/* 앱 다운로드 버튼 영역 */}
            <StoreButtonContainer>
                <StoreButtons />
            </StoreButtonContainer>
        </SurveyContainer>
    );
};

export default Survey;

// ===== 스타일 컴포넌트 =====

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    padding: clamp(1rem, 4vw, 2rem) 1rem;
    font-family: 'NanumSquare', sans-serif;
`;

const SectionTitle = styled.h2`
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;

const FormContainer = styled.div`
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    padding: clamp(0.5rem, 2vw, 1.5rem);
    margin-bottom: clamp(1rem, 3vw, 2rem);
`;

const SuccessMessage = styled.div`
    margin: 0.5rem 1rem 1.5rem;
    padding: 0.75rem 1rem;
    background-color: rgba(249, 217, 35, 0.15);
    border-left: 3px solid #F9D923;
    border-radius: 0 8px 8px 0;
    color: #555;
    font-size: clamp(0.85rem, 3vw, 1rem);
    animation: fadeIn 0.5s ease;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const HighlightText = styled.span`
    font-weight: 600;
    color: #333;
`;

const ContactSection = styled.div`
    margin-top: 1rem;
    opacity: ${props => props.show ? 1 : 0};
    max-height: ${props => props.show ? '500px' : '0'};
    overflow: hidden;
    transition: all 0.5s ease;
`;

const PhoneSuccessMessage = styled.div`
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    background-color: rgba(100, 200, 100, 0.1);
    border-left: 3px solid #28a745;
    border-radius: 0 8px 8px 0;
    color: #2e7d32;
    font-size: clamp(0.9rem, 3vw, 1rem);
    animation: fadeIn 0.5s ease;

    @media (max-width: 480px) {
        padding: 0.5rem 0.75rem;
        font-size: 0.9rem;
        margin-top: 0.75rem;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const StoreButtonContainer = styled.div`
    margin-top: 1rem;
`;
