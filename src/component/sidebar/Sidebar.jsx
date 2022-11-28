import './sidebar.scss'
import DasboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import MobileScreenShareSharpIcon from '@mui/icons-material/MobileScreenShareSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'><span className='logo'>SHOES MART</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <NavLink to={'/'}>
                            <DasboardIcon className="icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <NavLink to={'/user'}>

                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to={'/product'}>
                            <CategoryIcon className="icon" />
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/orders'}>
                            <LocalGroceryStoreSharpIcon className="icon" />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <LocalShippingSharpIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <BuildSharpIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">  USERS</p>
                    <li>
                        <AccountCircleRoundedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <NavLink to={'/logout'}>
                            <MobileScreenShareSharpIcon className="icon" />
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='buttom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div >
    )
}

export default Sidebar
