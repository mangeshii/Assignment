import "./navigationbar.css";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFileText } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineSave } from 'react-icons/ai'

const NavigationBar = () => {
    return (
        <>
            <div className="navigation-wrapper  ">
                <ul className="nav nav-tabs ">
                    <li><Link to="/jobs">
                        <span className="icon"><AiOutlineHome /></span>
                        <span className="icon-text" >Recommended Jobs</span>
                    </Link></li>
                    <li><Link to="/">
                        <span className="icon"><AiOutlineFileText /></span>
                        <span className="icon-text">Applied</span>
                    </Link></li>
                    <li><Link to="/saved">
                        <span className="icon"><AiOutlineSave /></span>
                        <span className="icon-text">Saved</span>
                    </Link></li>
                    <li><Link to="/messages">
                        <span className="icon"><AiOutlineMessage /></span>
                        <span className="icon-text">Messages</span>
                    </Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavigationBar
