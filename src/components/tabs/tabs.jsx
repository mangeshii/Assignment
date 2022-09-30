import "./tabs.css";
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFileText } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineSave } from 'react-icons/ai'

const NavigationBar = () => {
    return (
        <>
            <div className="navigation-wrapper">
                <ul className="nav-tabs ">
                    <li className="col-3"><NavLink to="/jobs" className="nav-link" style={{color:'black'}}>
                        <span className="icon"><AiOutlineHome /></span>
                        <span className="icon-text" >Jobs</span>
                    </NavLink></li>
                    <li className="col-3"><NavLink exact="true" to="/" end className="nav-link" style={{color:'black'}}>
                        <span className="icon"><AiOutlineFileText /></span>
                        <span className="icon-text">Applied</span>
                    </NavLink></li>
                    <li className="col-3"><NavLink to="/saved" className="nav-link" style={{color:'black'}}>
                        <span className="icon"><AiOutlineSave /></span>
                        <span className="icon-text">Saved</span>
                    </NavLink></li>
                    <li className="col-3"><NavLink to="/messages" className="nav-link" style={{color:'black'}}>
                        <span className="icon"><AiOutlineMessage /></span>
                        <span className="icon-text">Messages</span>
                    </NavLink></li>
                </ul>   
            </div>
        </>
    )
}

export default NavigationBar
