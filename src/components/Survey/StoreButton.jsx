// StoreButtons.jsx - 앱스토어 & 구글플레이 다운로드 버튼
import React from "react";
import styled from "styled-components";

const StoreButtons = () => {
    return (
        <ButtonWrapper>
            <StoreButton>
                <StoreImage
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                />
            </StoreButton>
            <StoreButton>
                <StoreImage
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                />
            </StoreButton>
        </ButtonWrapper>
    );
};

export default StoreButtons;

// 버튼 묶음 스타일
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 20px;
`;

// 버튼 자체 스타일
const StoreButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

// 이미지 크기 스타일
const StoreImage = styled.img`
    display: block;
    height: auto;
    max-height: 56px;
    width: auto;
    transition: transform 0.3s ease;  
    &:hover {
        transform: scale(1.08);      
    }
`;