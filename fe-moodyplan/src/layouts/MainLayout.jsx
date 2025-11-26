import MenuComponent from '../components/MenuComponent/MenuComponent'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="main-wapper">
            <div className="main-menu">
                <MenuComponent />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout