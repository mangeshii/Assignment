import "./sidebar.css"
import { HiOutlineHome } from 'react-icons/hi'
const Sidebar = () => {
    return (
        <>
        <div className="sidebar-wrapper">
            <div class="sidebar">
                <a  href="#home">
                    <div className="home-wrapper">
                        <HiOutlineHome className="home-icon" />
                        <p className="home-text">Home</p>
                    </div>
                </a>
                <a href="#home">
                    <div className="home-wrapper">
                        <HiOutlineHome className="home-icon" />
                        <p className="home-text">Saved</p>
                    </div>
                </a>
                <a href="#home">
                    <div className="home-wrapper">
                        <HiOutlineHome className="home-icon" />
                        <p className="home-text">Applied</p>
                    </div>
                </a>
                <a href="#home">
                    <div className="home-wrapper">
                        <HiOutlineHome className="home-icon" />
                        <p className="home-text">Messages</p>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}
export default Sidebar
