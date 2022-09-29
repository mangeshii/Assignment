import "./application.css"
import NavigationBar from "../Navigation/navigationbar"
import CandidateData from "../../Json/Json"
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FcApproval } from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
import { useState, useEffect } from "react";

const TrackApplication = () => {
    const [status, setStatus] = useState('')
    const { id } = useParams();
    const element = CandidateData.find(e => e.id === id)

    useEffect(() => {
        var variable = []
        if (element.status == 'Not Selected by employeer') {
            variable.push(['Not Selected', '#FFEDED', <ImCross />])
        }
        else if (element.status == 'Applied') {
            variable.push(['Pending...', '#FFFFE0'])
        }
        else {
            variable.push(['Selected', '#e4f7e6', <FcApproval />])
        }
        setStatus(variable)
    }, [])


    return (
        <>
            <div className="track-wrapper">
                <div className="header job-header container">
                    <h2>Applied Jobs</h2>
                </div>
                <NavigationBar />
            </div>

            <div className="container track-container">
                <div className="tracker">
                    <div className="com-info">
                        <h4>{element.jobrole}</h4>
                        <p className="p1">{element.company}</p>
                        <p className="p2">{element.location}</p>
                    </div>
                    {status && status.map((i, e) => {
                        return (
                            <div key={e} >
                                <Card className="card " style={{ backgroundColor: '#e4f7e6', margin:'0' }}>
                                    <Card.Body className="card-bodyy">
                                        <FcApproval className="status-icon" />
                                        <Card.Title className="title">
                                            <span className="app-status">Application submitted</span>
                                            <span className="a-date">{`You updated the status of this job on ${element.appliedOn}`}</span>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>

                                <Card className="card" style={{ backgroundColor: `${i[1]}` }}>
                                    <Card.Body className="card-bodyy">
                                        <div className="status-icon cross">{i[2]}</div>
                                        <Card.Title className="title">
                                            <span className="app-status">Telephonic Interview</span>
                                            <span className="a-date">{i[0]}</span>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="card" style={{ backgroundColor: `${i[1]}` }}>
                                    <Card.Body className="card-bodyy">
                                        <div className="status-icon cross">{i[2]}</div>
                                        <Card.Title className="title">
                                            <span className="app-status">Technical Round</span>
                                            <span className="a-date">{i[0]}</span>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className="card" style={{ backgroundColor: `${i[1]}` }}>
                                    <Card.Body className="card-bodyy">
                                        <div className="status-icon cross">{i[2]}</div>
                                        <Card.Title className="title">
                                            <span className="app-status">HR Round</span>
                                            <span className="a-date">{i[0]}</span>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>


                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )
}
export default TrackApplication

