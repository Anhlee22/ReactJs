import React from 'react';
import './../css/index.css';
const Button = () => {
    return (
        <div>
            <button className="buttonne"onClick={()=>alert("Đăng nhập thành công")}>Login</button>
        </div>
    );
};

export default Button;