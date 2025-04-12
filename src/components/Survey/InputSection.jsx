import React, { useState, useRef } from "react";
import styled from "styled-components";

const InputSection = ({
    label,
    onSend,
    disabled = false,
    type = "text",
    requireConsent = false,
    isAgreed = true,
    placeholder = "입력해주세요"
}) => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const handleSend = () => {
        if (requireConsent && !isAgreed) {
            inputRef.current.setCustomValidity("개인정보 수집 및 이용에 동의해주세요.");
            inputRef.current.reportValidity();
            return;
        }

        inputRef.current.setCustomValidity("");

        if (value.trim() && onSend) {
            onSend(value);
            setValue("");
        }
    };

    const formatPhoneNumber = (val) => {
        const numbers = val.replace(/\D/g, "");
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 7) return numbers.replace(/(\d{3})(\d+)/, "$1-$2");
        return numbers.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3").slice(0, 13);
    };

    const handleChange = (e) => {
        let val = e.target.value;
        if (type === "phone") {
            val = formatPhoneNumber(val);
        }
        setValue(val);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputGroup isFocused={isFocused}>
                <StyledInput
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    required={requireConsent}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyPress={handleKeyPress}
                />
                <SendButton
                    onClick={handleSend}
                    disabled={disabled || !value.trim()}
                    hasValue={value.trim().length > 0}
                >
                    보내기
                </SendButton>
            </InputGroup>
        </Wrapper>
    );
};

export default InputSection;

// ===== 스타일 =====

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    max-width: 600px;
    font-family: 'NanumSquare', sans-serif;

`;

const Label = styled.label`
    font-size: clamp(13px, 4vw, 16px);
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
    transition: color 0.3s;
`;

const InputGroup = styled.div`
    display: flex;
    border-radius: 12px;
    height: 48px;
    
    border: 1px solid ${props => props.isFocused ? '#F9D923' : '#e0e0e0'};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: ${props => props.isFocused ? '0 0 0 3px rgba(249, 217, 35, 0.2)' : 'none'};
`;

const StyledInput = styled.input`
    flex: 1;
    padding: 0 16px;
    font-size: clamp(14px, 4vw, 16px);
    border: none;
    outline: none;
    background-color: #fff;
    font-family: 'NanumSquare', sans-serif;

    &::placeholder {
        color: #bbb;
        font-size: clamp(13px, 3.5vw, 15px);
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;

const SendButton = styled.button`
    padding: 0 22px;
    height: 48px;
    background: ${props => props.hasValue ? 'linear-gradient(135deg, #FFE15D, #F9D923)' : '#f0f0f0'};
    color: ${props => props.hasValue ? '#333' : '#999'};
    font-weight: 600;
    font-size: clamp(13px, 3.5vw, 15px);
    border: none;
    cursor: ${props => props.disabled || !props.hasValue ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    white-space: nowrap;
    font-family: 'NanumSquare', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    &:hover:not(:disabled) {
        background: ${props => props.hasValue ? 'linear-gradient(135deg, #F9D923, #F9D923)' : '#f0f0f0'};
        color: ${props => props.hasValue ? '#222' : '#999'};
    }

    &:active:not(:disabled) {
        transform: ${props => props.hasValue ? 'scale(0.98)' : 'none'};
    }

    &:disabled {
        background: #f0f0f0;
        color: #ccc;
    }
`;
