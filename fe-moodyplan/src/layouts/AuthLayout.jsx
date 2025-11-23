import React, { useState } from 'react'
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import { Outlet } from 'react-router-dom';

const AuthComponent = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='authLayout-wapper'>
            <Outlet />
        </div>

    )
}

export default AuthComponent