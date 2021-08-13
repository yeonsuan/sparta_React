import React from "react";
import img from "./scc_img01.png";

const Start = (props) => {

    return (
        <div className="container">
            <div className="header">
              <img className="header__img" src={img}/>
              <h1>나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
              <input className="header__description" type="text" placeholder="내 이름"/>
              <button className="btn">시작하기</button>
            </div>
        </div>
    );
}

export default Start;