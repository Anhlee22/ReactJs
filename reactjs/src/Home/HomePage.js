import logo from './../logo.svg';
import Text from "./../component/Text";
import Input from "./../component/Input";
import useCalculate from "./../untils/useCalculate";
import Button from "./../component/Button";
import Social from "./../component/Social";
import './../css/index.css';
import React, { useState, useMemo, userEffects } from 'react';

function HomePage() {
  const [name, setName] = useState()
  const [age, setAge] = useState()

  const computeletterCount = 
    (value) =>{
      console.log(value);
      return value;
    }

  const letterCount = useMemo(()=> computeletterCount(name), [name]);
  const total = useCalculate(age)
  return (
    <div className="home-page">
        {/* <Text></Text> */}
        {/* <Button></Button>
        <Social></Social> */}
        <Input labelText="Họ và tên" placeholderText="Vui lòng nhập họ và tên" onChangeInput={(e)=>setName(e.target.value)}/>
        <Input labelText="Tuổi" placeholderText="Vui lòng nhập tuổi" onChangeInput={(e)=>setAge(e.target.value)}/>
        <br></br>
        <h2>{letterCount}</h2>
        <h3>Hello: {name}</h3>
        <h3>Tuổi: {age}</h3>
        <h3>Calculate x2: {total}</h3>
    </div>
  );
}

export default HomePage;
