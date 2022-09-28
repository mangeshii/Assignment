import "./dash-board.css"
import logoo from "./logo.png"
import CandidateData from "../../Json/Json"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        setData(CandidateData)

    }, [])

    const statusBgColorChange = (type) => {
        switch (type) {
            case 'Applied':
                return '#eef1fe';
            case 'Not Selected by employeer':
                return '#FFEDED';
            case 'Pending':
                return '#FFFFE0';
            case 'Employeer reached out':
                return '#e4f7e6'
            default:
                return undefined
        }
    }
    const statusTxtColorChange = (type) => {
        switch (type) {
            case 'Applied':
                return '#2557a7';
            case 'Not Selected by employeer':
                return '#o1579b';
            case 'Pending':
                return '#f2a73d';
            case 'Employeer reached out':
                return '#1f662c'
            default:
                return undefined
        }
    }
    return (
        <>
            <div className="dashboard-wrapper">
                <div className="content-wrapper">
                    {data && data.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className="information">
                                    <div className="company-logo">
                                        <div className="logo">
                                            <img src={logoo} />
                                        </div>
                                    </div>
                                    <div className="application-status container">
                                        <div className="status-wrapper">
                                            <p className="status" style={{
                                                width: 'fit-content',
                                                padding: '2px 15px',
                                                borderRadius: '10px',
                                                color: statusTxtColorChange(e.status),
                                                backgroundColor: `${statusBgColorChange(e.status)}`,
                                                fontWeight: 800
                                            }}>{e.status}</p></div>
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
                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )
}
export default Dashboard