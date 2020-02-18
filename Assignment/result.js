import React, { Component } from 'react';//manageing state using class components
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
//import UserInput from './Assignment/UserInputComponent'
import UserOutput from './Assignment/UserOutpoutComponent'
//Manage state Class Based Components
class App extends Component {
    state = {
      name: 'React Welcome'
    };
 onChangeHandler=()=>{
  this.setState({
    name:event.target.value
  })
};
  render() {
    const buttonStyle ={
      backGroundColor : 'Red'

    }
    return (
      <div> 
        <UserOutput style ={buttonStyle} change={this.onChangeHandler} name={this.state.name}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
