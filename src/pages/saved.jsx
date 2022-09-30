import NavigationBar from "../components/tabs/tabs"
import "./saves.css"
import save from "../images/save.png"
import { NavLink } from 'react-router-dom';

const Saved = () => {
    return (
        <div className='navlink-wrapper'>
            <div className='text'>
                <h5>Saved Jobs</h5>
            </div>
            <NavigationBar />
            <div className="image-cont container">
                <img src={save} alt="save" className="save-image img-fluid" />
                <h5>No jobs saved yet</h5>
                <p>Jobs you save appear here.</p>
                <NavLink to="/jobs"> <button className="find-btn">Find jobs</button></NavLink>
            </div>
        </div>
    )
}
export default Saved