import React from 'react'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MyStyled bgColor={"#E2D2D2"}>안녕~</MyStyled>
      {/* bgColor이게 없어지면 밑에 삼항연산자로 인해서 false가 되기때문에 빨강으로 바뀜~ */}
    </div>
  )
}

const MyStyled = styled.div`
    width:50vw;
    min-height: 150px;
    padding:10px;
    border-radius: 15px;
    color: black;
    &:hover {
      background-color: #ddd;
    }
    background-color: ${(props) => (props.bgColor? "#E2D2D2" : "red")};
    /* 프롭스로 데이터 넘겨줄 수 있고 스타일 컴포넌트로 잡기! */
`

export default App
