import "./navigationbar.css";
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFileText } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineSave } from 'react-icons/ai'

const NavigationBar = () => {
    return (
        <>
            <div className="navigation-wrapper">
                    <ul className="nav nav-tabs  ">
                        <li><NavLink  to="/jobs">
                            <span className="icon"><AiOutlineHome /></span>
                            <span className="icon-text" >Recommended Jobs</span>
                        </NavLink></li>
                        <li><NavLink exact={true}  to="/" end>
                            <span className="icon"><AiOutlineFileText /></span>
                            <span className="icon-text">Applied</span>
                        </NavLink></li>
                        <li><NavLink  to="/saved">
                            <span className="icon"><AiOutlineSave /></span>
                            <span className="icon-text">Saved</span>
                        </NavLink></li>
                        <li><NavLink  to="/messages">
                            <span className="icon"><AiOutlineMessage /></span>
                            <span className="icon-text">Messages</span>
                        </NavLink></li>
                    </ul>
            </div>
        </>
    )
}

export default NavigationBar
