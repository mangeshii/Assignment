import NavBar from "../Nav/navbar";
import "./main-container.css"
import NavigationBar from "../Navigation/navigationbar";
import Dashboard from "../Dashboard/dash-board";

const MainContainer = () => {
    return (
        <>
            <div className="main-container-wrapper ">
                <NavBar />
                {/* <div className="wrapper">
                    <div className="header">
                        <h2>My Jobs</h2>
                    </div> */}
                    <NavigationBar/>
                    <Dashboard/>
                {/* </div> */}

                {/* <div>
                </div> */}
            </div>
        </>
    )
}
export default MainContainer
