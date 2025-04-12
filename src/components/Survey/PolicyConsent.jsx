// PolicyConsent.jsx - 개인정보 수집 동의 및 상세 안내 컴포넌트
import React from "react";
import styled from "styled-components";


const PolicyConsent = ({ isOpen, setIsOpen, isAgreed, setIsAgreed }) => (
    <Container>
        <CheckboxWrapper>
            <Checkbox
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)} // ✅ 연결
                required
            />
            <ConsentText>
                위 내용을 확인하였으며 개인정보 수집 및 이용에 동의합니다.
            </ConsentText>
        </CheckboxWrapper>

        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
            [자세히 보기]
        </ToggleButton>

        {isOpen && (
            <PolicyDetail>
                <DetailText><strong>✅ 수집 항목 :</strong> 전화번호 </DetailText>
                <DetailText><strong>✅ 수집 목적 :</strong> 미리주문 서비스 개발</DetailText>
                <DetailText><strong>✅ 수집 주체 :</strong> 가천대학교 GCS 6기 팀 '번뜩'</DetailText>
                <DetailText><strong>✅ 보유 및 이용 기간 :</strong> 수집일로부터 1개월 이내 파기</DetailText>
                <DetailText><strong>✅ 동의 거부 시 불이익 :</strong> 사전예약은 불가능하나, 향후 정식 서비스 이용에는 제한 없음</DetailText>
                <DetailText><strong>✅ 문의처 :</strong> junu120707@gachon.ac.kr</DetailText>
            </PolicyDetail>
        )}
    </Container>
);


export default PolicyConsent;

// 전체 컨테이너
const Container = styled.div`
    max-width: 36rem;
    margin-top: 10px;
    font-size: 0.875rem;
    color: #374151;
`;

// 체크박스와 텍스트 정렬
const CheckboxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
`;

const Checkbox = styled.input`
    margin-top: 0.25rem;
`;

const ConsentText = styled.span``;

// [자세히 보기] 버튼
const ToggleButton = styled.button`
    margin-left: 1.5rem;
    color: #2563eb;
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
`;

// 상세 내용 컨테이너
const PolicyDetail = styled.div`
    margin-left: 1.5rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    padding: 1rem;
    margin-top: 0.5rem;
`;

const DetailText = styled.p`
    margin-bottom: 0.5rem;
`;
