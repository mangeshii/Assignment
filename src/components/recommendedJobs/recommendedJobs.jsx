import Card from 'react-bootstrap/Card';
import "./recommendedJobs.css"
import { HiStar } from "react-icons/hi";
import { BiMoney } from "react-icons/bi"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiHandbagFill } from 'react-icons/ri'
import NavigationBar from '../tabs/tabs';
import { useContext } from 'react';
import {CandidateContext} from '../../context/context';


const RecommendedJobs = () => {
    const candidateData = useContext(CandidateContext)

    return (
        <>
            <div className='navlink-wrapper'>
                <div className='text'>
                    <h5>Jobs</h5>
                </div>
                <NavigationBar />
            </div>
            <div className="jobs-wrapper ">
                <div className="jobs-header container ">
                    {candidateData && candidateData.map((e, i) => {
                        return (

                            <div className='card-container ' key={i}>
                                <Card className='cardd' style={{ margin: '0' }}>
                                    <Card.Body>
                                        <Card.Title>{e.jobrole}</Card.Title>
                                        <Card.Subtitle className="mb-2 company">{e.company + "  "}
                                            <span className='rating ms-2'>{e.rating}<HiStar className='ms' /></span></Card.Subtitle>
                                        <Card.Text className='location'>{e.location}</Card.Text>
                                        <div className='b-wrappr'>
                                            <Card.Text className="jobtype"><RiHandbagFill className='mb-1 me-1' />{e.JobType}</Card.Text >
                                            <Card.Text className="salary"><BiMoney className='money-icon mb-1 me-1' />{e.salary}</Card.Text>
                                            <Card.Text className="working-days"><AiOutlineClockCircle className='mb-1 me-1' />{e.workingDays}</Card.Text>
                                        </div>
                                        <Card.Text className='skill'><b>Skills: </b>{e.skills}</Card.Text>
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
export default RecommendedJobs

