import NavigationBar from "../components/tabs/tabs"
import "./saves.css"
import save from "../images/save.png"

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
                <p>Jobs you save appear here.
                </p>
            </div>
        </div>
    )
}
export default Saved