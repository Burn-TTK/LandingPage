import React from "react";
import styled from "styled-components";
import GCSImage from "../assets/GCS.png";

const Footer = () => {
    return (
        <FooterWrapper>
            <ContentContainer>
                <LeftColumnGroup>
                    <Column>
                        <Title>회사 소개</Title>
                        <LinkItem>소개</LinkItem>
                        <LinkItem>팀원 소개</LinkItem>
                        <LinkItem>연락처</LinkItem>
                    </Column>
                    <Column>
                        <Title>서비스</Title>
                        <LinkItem>이용약관</LinkItem>
                        <LinkItem>개인정보처리방침</LinkItem>
                        <LinkItem>쿠키 설정</LinkItem>
                    </Column>
                    <Column>
                        <Title>고객센터</Title>
                        <LinkItem>자주 묻는 질문</LinkItem>
                        <LinkItem>문의하기</LinkItem>
                    </Column>
                    <Column>
                        <Title>SNS</Title>
                        <LinkItem>Instagram</LinkItem>
                        <LinkItem>YouTube</LinkItem>
                    </Column>
                </LeftColumnGroup>

                <ImageContainer>
                    <img src={GCSImage} alt="footer 배너" />
                </ImageContainer>
            </ContentContainer>

            <BottomRow>
                <CompanyInfo>
                    가천대학교 GCS 6RL 팀 번뜩 | 경기 성남시 수정구 성남대로 1342 AI관 6층<br />
                    010-8596-3705 | junu120707@gachon.ac.kr |
                </CompanyInfo>
            </BottomRow>
        </FooterWrapper>
    );
};

export default Footer;

// ===== 스타일 =====

const FooterWrapper = styled.footer`
    padding: 40px 20px;
    color: #333;
    font-family: 'NanumSquare', sans-serif;
`;

const ContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

const LeftColumnGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    flex: 1;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* 2개씩 2줄 */
        gap: 24px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 120px;
    max-width: 150px;
    word-break: keep-all;
    text-align: left;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const Title = styled.h4`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
`;

const LinkItem = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const ImageContainer = styled.div`
    width: 120px;

    @media (max-width: 768px) {
        width: 100px;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
`;

const BottomRow = styled.div`
    max-width: 1200px;
    margin: 30px auto 0;
    font-size: 12px;
    color: #666;
    line-height: 1.6;
    text-align: center;
    font-weight: 300; 
`;

const CompanyInfo = styled.p`
    margin: 0;
`;