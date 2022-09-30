import NavigationBar from "../components/tabs/tabs"
import message from "../images/message.png"

const Messages = () => {
    return (
        <div className='navlink-wrapper'>
            <div className='text'>
                <h5>Messages</h5>
            </div>
            <NavigationBar />
            <div className="image-cont container">
            <img className="save-image img-fluid" alt="message" src={message}/>
                <h5>Nothing yet</h5>
                <p>Applications you archive appear here.
                </p>
            </div>           
        </div>

    )
}
export default Messages