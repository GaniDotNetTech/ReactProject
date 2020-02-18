import React from 'react';

const UserInput=(props)=>{
return(
<div>
  <p onClick={props.click}>I am Invoked by {props.name} </p>
</div>

);

}
export default UserInput;