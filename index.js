import React, { Component } from 'react';//manageing state using class components
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
//Manage state Class Based Components
class App extends Component {
     constructor(props){
       super(props)

     }
SwitchNameHandler =()=>{
this.setState({
  name : 'Changed the Name'
})

};
  render() {
    return (
      <div>
      <button onClick = {this.SwitchNameHandler}/>
        <Hello apptitle = {this.props.apptitle} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App apptitle = 'Person Manager'/>, document.getElementById('root'));
