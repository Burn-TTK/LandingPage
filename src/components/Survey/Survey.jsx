import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./InputSection";
import PolicyConsent from "./PolicyConsent";
import StoreButtons from "./StoreButton";
import axios from "axios";

const Survey = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondEnabled, setIsSecondEnabled] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [restaurantName, setRestaurantName] = useState("");

    const handleRestaurantSubmit = (value) => {
        setRestaurantName(value);
        axios.post("http://localhost:5000/restaurant", { name: value });
        setIsSecondEnabled(true);
    };

    const handlePhoneSubmit = (value) => {
        axios.post("http://localhost:5000/phone", { phone: value });
    };

    return (
        <SurveyContainer>
            <SectionTitle>주문 체험 신청</SectionTitle>

            <FormContainer>
                <InputSection
                    label="미리 주문 체험을 하고싶은 식당을 입력하세요"
                    placeholder="식당 이름 입력"
                    onSend={handleRestaurantSubmit}
                />

                {isSecondEnabled && (
                    <SuccessMessage>
                        <HighlightText>{restaurantName}</HighlightText>이(가) 등록되었습니다!
                    </SuccessMessage>
                )}

                <ContactSection show={isSecondEnabled}>
                    <InputSection
                        label="연락 가능한 전화번호를 알려주세요"
                        placeholder="010-0000-0000"
                        disabled={!isSecondEnabled}
                        type="phone"
                        requireConsent={true}
                        isAgreed={isAgreed}
                        onSend={handlePhoneSubmit}
                    />

                    <PolicyConsent
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isAgreed={isAgreed}
                        setIsAgreed={setIsAgreed}
                    />
                </ContactSection>
            </FormContainer>

            <StoreButtonContainer>
                <StoreButtons />
            </StoreButtonContainer>
        </SurveyContainer>
    );
};

export default Survey;


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

const StoreButtonContainer = styled.div`
    margin-top: 1rem;
`;
