import React from 'react';
import {InputGroup, FormControl, Button } from 'react-bootstrap';



function Input(){
   return (
      <>
   <InputGroup className="col-lg-6 mx-auto">
    <FormControl
      type="email"
      placeholder="Enter your email address"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button className="btn btn-primary">Sign Up</Button>
    </InputGroup.Append>
   </InputGroup>
      </>
   );
}

export default Input;