import "./dash-board.css"
import logoo from "./logo.png"
import CandidateData from "../../Json/Json"

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-wrapper  ">
                <div className="content-wrapper">
                    {CandidateData.map((e) => {
                        return (
                            <>

                                <div className="information">
                                    <div className="company-logo">
                                        <div className="logo">
                                            <img src={logoo} />
                                        </div>
                                    </div>
                                    <div className="application-status container">
                                        <div className="status-wrapper">
                                            <p className="status">{e.status}</p></div>
                                        <div className="job-role">
                                            <h5>{e.jobrole}</h5></div>
                                        <div className="company-name">
                                            <p className="para">{e.company}</p></div>
                                        <div className="location">
                                            <p className="para">{e.location} </p></div>
                                        <div className="applied-on"><p>{`Applied on ${e.appliedOn}`}</p></div>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}


                </div>
            </div>

        </>
    )
}
export default Dashboard