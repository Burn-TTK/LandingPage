import React from "react";
import SectionA from "./information/SectionA";
import SectionB from "./information/SectionB";
import styled from "styled-components";
const Information = () => {
    
    return (
        <Container>
            <SectionA/>
            <SectionB/>
        </Container>
    );

};

export default Information;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5%;
`;