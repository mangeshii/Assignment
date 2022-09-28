import "./navigationbar.css";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    
    return (
        <>
            <div className="navigation-wrapper">
                <ul className="nav nav-tabs ">
                    <li ><Link to="/home">Home</Link></li>
                    <li><Link to="/">Applied</Link></li>
                    <li><Link to="/saved">Saved</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavigationBar