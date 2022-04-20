import logo from './../logo.svg';
import Text from "./../component/Text";
import Input from "./../component/Input";
import Button from "./../component/Button";
import Social from "./../component/Social";
import './../css/index.css';
import React, { useState } from 'react';

function HomePage() {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  return (
    <div className="home-page">
        {/* <Text></Text> */}
        {/* <Button></Button>
        <Social></Social> */}

        <Input labelText="Họ và tên" placeholderText="Vui lòng nhập họ và tên" onChangeInput={(e)=>setName(e.target.value)}/>
        <Input labelText="Tuổi" placeholderText="Vui lòng nhập tuổi" onChangeInput={(e)=>setAge(e.target.value)}/>
        <br></br>
        <h3>Hello: {name}</h3>
        <h3>Tuổi: {age}</h3>
    </div>
  );
}

export default HomePage;
