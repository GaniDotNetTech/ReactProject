import React from 'react';

const UserOutput = (props) =>{
  return(
  <div>
    <p onClick={props.click}> I m output Component {props.name}</p>
    <input type="text" onChange={props.change} value={props.name}/>
  </div>
  );

}
export default UserOutput;