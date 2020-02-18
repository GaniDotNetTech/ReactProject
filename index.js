import React, { Component } from 'react';//manageing state using class components
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
//Manage state Class Based Components
class App extends Component {
    state = {
      name: 'React Welcome'
    };
SwitchNameHandler =()=>{
console.log('Enabled');

};
  render() {
    return (
      <div>
      <button onClick = {this.SwitchNameHandler}/>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
