import { createContext, useState } from "react";
import CandidateData from "../json/candidate_data.json"

const CandidateContext=createContext();

const CandidateState=(props)=>{
    const [state,setState]=useState(CandidateData)

    return(
        <CandidateContext.Provider value={state}>
            {props.children}
        </CandidateContext.Provider>
    )
}

export {CandidateState,CandidateContext}