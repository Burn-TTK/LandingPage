import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./InputSection";
import PolicyConsent from "./PolicyConsent";
import StoreButtons from "./StoreButton";

const Survey = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <InputSection label="미리 주문 체험을 하고싶은 식당을 입력하세요!!" />
            <InputSection label="실제로 체험을 원하시면 전화번호 남겨주세요" />
            <PolicyConsent isOpen={isOpen} setIsOpen={setIsOpen} />
            <StoreButtons />
        </Wrapper>
    );
};

export default Survey;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
