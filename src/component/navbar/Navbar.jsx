import './navbar.scss'

import ElderlyRoundedIcon from '@mui/icons-material/ElderlyRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleDetail = (val) => {
        navigate("http://localhost:3006/products"${ val.id },
            { state: { ...val } });
    };

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className="input__Search">
                    <input placeholder="Tìm Kiếm Sản Phẩm..." type="text" onChange={(event) => { setSearchTerm(event.target.value); }} />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageRoundedIcon className='icon' />
                        English
                    </div>
                    <div className='item'>
                        < DarkModeRoundedIcon className='icon' />

                    </div>
                    <div className='item'>
                        <NotificationsNoneRoundedIcon className='icon' />
                        <div className='couter'>1</div>
                    </div>
                    <div className='item'>
                        <FormatListBulletedRoundedIcon className='icon' />

                    </div>
                    <div className='item'>
                        <img
                            src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/133909717_101833631855836_4039578550437942786_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=4jGSlJ92n7cAX-guC_b&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBXuFWHWyKOZxwyN6JsCjlaVdIU6RNmQJ7o6jl_7pajQQ&oe=6396F4DA'
                            alt=''
                            className='avatar'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
