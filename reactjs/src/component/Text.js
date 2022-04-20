import React, { useState } from 'react';

const Text = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const clear = () =>{
        setName("")
        setAge("")
    }
    return (
        <div className="firstform">
            <h3>Nhập họ và tên</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h3>Nhập tuổi</h3>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <h3>Thông tin bạn vừa nhập là</h3>
            <p>Họ và tên: {name}</p>
            <p>Tuổi: {age}</p>
            <button onClick={()=>clear()}>Clear</button>
        </div>
    );
};

export default Text;