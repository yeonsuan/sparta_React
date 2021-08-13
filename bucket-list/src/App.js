import React from "react";
import logo from "./logo.svg";

import BucketList from "./BucketList";
import styled from "styled-components";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    // ref는 이렇게 선언합니다! 
    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;


    this.setState({ list: [...list, new_item] });
  }

  render() {

    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <BucketList history={this.props.history} list={this.state.list} />} />



            <Route path="/detail" component={Detail} />
            <Route render={(props) => (<NotFound history={props.history} />)} />
          </Switch>
        </Container>
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>


        </Input>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default withRouter(App);