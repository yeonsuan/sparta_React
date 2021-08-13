import React from 'react';
import Nemo from './Nemo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };

    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);

    e.targer.style.background = "#eee";
  }

  componentDidMount(){ //(1)등록이 되었으면
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount(){ //(2)해제가 되어야한다!!!
    this.div.current.removeEventListener("mouseover", this.hoverEvent); //(3)위에꺼 해제해야하니까 그대로!
  }

  addNemo = () =>{
    this.setState({count: this.state.count +1});
    console.log('add nemo');
  }

  removeNemo = () =>{
    if(this.state.count >0){
      this.setState({count: this.state.count -1});
    }else{
      window.alert('nemo가 없어요!');
    }
    
    console.log('remove nem');
  }

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => (i));
    console.log(nemo_count);
    return (
      <div className="App" ref={this.div}>
        <Nemo/>
       
      </div>
    )
  }
}

export default App;
