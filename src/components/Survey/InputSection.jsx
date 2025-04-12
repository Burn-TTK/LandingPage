// InputSection.jsx - 단일 입력창 컴포넌트 (라벨, 입력, 버튼 포함)
import React, { useState, useRef } from "react";
import styled from "styled-components";

const InputSection = ({
    label,
    onSend,
    disabled = false,
    type = "text",
    requireConsent = false,
    isAgreed = true
}) => {
    const [value, setValue] = useState("");     // 입력된 텍스트 값
    const inputRef = useRef(null);              // input DOM 접근용

    // 보내기 버튼 클릭 핸들러
    const handleSend = () => {
        // 동의가 필수인데 아직 체크 안 했으면 → HTML 유효성 메시지 표시
        if (requireConsent && !isAgreed) {
            inputRef.current.setCustomValidity("개인정보 수집 및 이용에 동의해주세요.");
            inputRef.current.reportValidity(); // 경고 메시지 띄움
            return;
        }

        // 기존 경고 제거 (동의 체크 후 재전송할 때)
        inputRef.current.setCustomValidity("");

        // 부모 컴포넌트에 입력값 전달 -> 서버로 전달
        if (onSend) onSend(value);
    };

    // 전화번호 자동 하이픈 처리
    const formatPhoneNumber = (val) => {
        const numbers = val.replace(/\D/g, ""); // 숫자만 남기기
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 7) return numbers.replace(/(\d{3})(\d+)/, "$1-$2");
        return numbers.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
    };

    // 입력 변화 시 처리
    const handleChange = (e) => {
        let val = e.target.value;
        if (type === "phone") {
            val = formatPhoneNumber(val); // 전화번호 포맷 적용
        }
        setValue(val);
    };

    return (
        <Wrapper>
            <Paragraph>{label}</Paragraph>

            <Section>
                <Input
                    ref={inputRef} //유효성 검사 메시지 수동제어
                    type="text"
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    required={requireConsent} // 동의 필요 시 유효성 검사 대상
                />
                <button onClick={handleSend} disabled={disabled}>보내기</button>
            </Section>
        </Wrapper>
    );
};


export default InputSection;

// 컴포넌트 전체 래퍼
const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
`;

// 라벨 텍스트
const Paragraph = styled.p`
    font-size: 16px;
    color: #333;
    margin-top: 12px;  
    margin-bottom: 0;  
`;

// 입력창+버튼 묶음
const Section = styled.section`
    display: flex;
    gap: 3px;
    margin-top: 12px;
`;

// 입력 필드
const Input = styled.input`
    flex: 1;
    padding: 5px;
    font-size: 16px;
`;
