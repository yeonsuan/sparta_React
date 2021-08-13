import React from "react";

const NotFound = (props) => {
    return (
        <div>
            <h1>주소가 올바르지 않습니다.</h1>
            <button onClick={()=>{props.history.goBack();}}>뒤로가기</button>
        </div>
    );
};



            export default NotFound;