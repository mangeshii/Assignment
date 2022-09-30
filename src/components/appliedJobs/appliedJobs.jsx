import "./appliedJobs.css"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import NavigationBar from "../tabs/tabs"
import {CandidateContext} from '../../context/context';

const AppliedJobs = () => {
    const candidateData = useContext(CandidateContext)

    const statusBgColorChange = (type) => {
        switch (type) {
            case 'Applied':
                return '#eef1fe';
            case 'Not Selected by employeer':
                return '#FFEDED';
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
            case 'Employeer reached out':
                return '#1f662c'
            default:
                return undefined
        }
    }
    
    return (
        <>
            <div className='navlink-wrapper'>
                <div className='text'>
                    <h5>Applied Jobs</h5>
                </div>
                <NavigationBar />
            </div>
            <div className="dashboard-wrapper ">
                <div className="jobs-header container">
                    <div className="content-wrapper">
                        {candidateData && candidateData.map((e, i) => {
                            return (
                                <div key={i}>
                                    <div className="information">
                                        <div className="company-logo">
                                            <div className="logo">
                                                <img src={e.url} alt="company-logo" />
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
                                                <Link to={`/track_application/${e.id}`}> <h5>{e.jobrole}</h5></Link></div>
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

            </div>

        </>
    )
}
export default AppliedJobs