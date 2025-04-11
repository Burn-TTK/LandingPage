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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 20px;
`;

const StoreButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const StoreImage = styled.img`
    display: block;
    height: auto;
    max-height: 56px;
    width: auto;
`;
