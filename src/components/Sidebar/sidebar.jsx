import "./sidebar.css"
import { HiOutlineHome } from 'react-icons/hi'
import {FaRegSave} from 'react-icons/fa'
import {CgFileDocument} from 'react-icons/cg'
import {TbMessageCircle2} from 'react-icons/tb'
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
                    <div className="save-wrapper">
                        <FaRegSave className="save-icon" />
                        <p className="home-text">Saved</p>
                    </div>
                </a>
                <a className="active" href="#home">
                    <div className="applied-wrapper">
                        <CgFileDocument className="applied-icon" />
                        <p className="home-text">Applied</p>
                    </div>
                </a>
                <a href="#home">
                    <div className="message-wrapper">
                        <TbMessageCircle2 className="message-icon" />
                        <p className="home-text">Messages</p>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}
export default Sidebar
