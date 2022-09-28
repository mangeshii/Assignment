import Dashboard from '../Dashboard/dash-board';
import Home from "../Pages/Home"
import Saved from "../Pages/Saved"
import Messages from "../Pages/Messages"
import NavBar from '../Nav/navbar';

const PageHeading = () => {
    let component
    
    switch (window.location.pathname){
        case "/":
            component=<Dashboard/>
        case "/home":
            component=<Home/>
        case "/saved":
            component=<Saved/>
        case "/messages":
            component=<Messages/>
    }
    return (
        <>
          {/* <Home component={component}/> */}
        </>
    )
}
export default PageHeading