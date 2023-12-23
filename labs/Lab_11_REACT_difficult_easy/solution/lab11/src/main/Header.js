import React from 'react' 
import styled from 'styled-components';

const DivWrapper = styled.div`
    background-color: indigo;
    height: 2px;
`;

const Header = ()=>{
    return(
        <DivWrapper/>
    );
}

export { Header };