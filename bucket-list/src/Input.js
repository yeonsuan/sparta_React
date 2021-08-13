import React, { Component } from 'react'
import styled from "styled-components";

export default class Input extends Component {
    render() {
        return (
            <InputStyle>
                <Btstyle>
                <input type="text" />
                </Btstyle>
                <button>추가하기</button>
            </InputStyle>
        )
    }
}

const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-width:350px;
    min-height: 15vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Btstyle = styled.div`
    
    
    max-width: 200vh;
`