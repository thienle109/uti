import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from '../../component/navbar/Navbar';
import './home.scss';


const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                
            </div>
        </div>
    );
};

export default Home;
