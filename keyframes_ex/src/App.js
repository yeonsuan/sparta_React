import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from "styled-components";

function App() {
  return (
    <div className="App">
      <Box/>
    </div>
  );
}

const move = keyframes`
  0%{
    top: 20px;
    opacity: 1;
    left: 20px;
    background-color: green;
  }
  30%{
    top: 50px;
    background-color:orange;
  }
  50%{
    top: 200px;
    opacity: 0;
    left:200px;
  }
  80%{
    top: 150px;
  }
  100%{
    top: 20px;
    opacity: 1;
    left: 20px;
    background-color: blue;
  }
`

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity:1;
  animation: ${move}/*백틱 안에서 자바스크립트 사용하는 방법*/ 2s 1s infinite; 
`;



export default App;
