import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #dddcdd;
    background-color: DarkSlateBlue;
    padding: 16px;
    border: 1px solid aqua;
    border-radius: 10px;
`;

const TextWrapper = styled.span`
    font-size: 32px;
    color: black;
    font-weight: bold;
`;

const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin: 8px;
    color: white;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonWrapper = styled.button`
    border: unset;
    background-color:fuchsia;
    height: 20px;
    margin-right: 2px;
    border-radius: 20px;
    color: white;
    font-family: Tahoma, Geneva, sans-serif;
`;

const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`;

const Krujok = styled(TextWrapper)`
    background-color: pink;
    border-radius: 10px;
    padding-bottom: 3px;
    padding-left: 3px;
    padding-right: 3px;
`;

const Monitor = ({today,prevHandler, curHandler, nextHandler})=>{
    return(
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <Krujok>
                    <TextWrapper>{today.format('YYYY')}</TextWrapper>
                </Krujok>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
                <TodayButton onClick={curHandler}>сегодня</TodayButton>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
            </ButtonsWrapper>
        </DivWrapper>
    );
}

export { Monitor }