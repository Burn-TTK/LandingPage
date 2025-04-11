import React from "react";
import styled from "styled-components";

const InputSection = ({ label }) => (
    <Wrapper>
        <Paragraph>{label}</Paragraph>
        <Section>
            <Input type="text" />
            <button>보내기</button>
        </Section>
    </Wrapper>
);

export default InputSection;


const Wrapper = styled.p`
    display : flex;
    flex-direction: column;
`;


const Paragraph = styled.p`
    font-size: 16px;
    color: #333;
    margin-top: 12px;  
    margin-bottom: 0;  
`;

const Section = styled.section`
    display: flex;
    gap: 3px;
    margin-top: 12px;
`;

const Input = styled.input`
    flex: 1;
    padding: 5px;
    font-size: 16px;
`;
