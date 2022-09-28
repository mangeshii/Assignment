import NavBar from "../Nav/navbar";
import "./main-container.css"
import NavigationBar from "../Navigation/navigationbar";
import Dashboard from "../Dashboard/dash-board";

const MainContainer = () => {
    return (
        <>
            <div className="main-container-wrapper ">
                <NavigationBar />
                <Dashboard />
            </div>
        </>
    )
}
export default MainContainer
