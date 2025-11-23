import { Outlet } from 'react-router-dom';

const AuthComponent = () => {
    return (
        <div className='authLayout-wapper'>
            <Outlet />
        </div>

    )
}

export default AuthComponent