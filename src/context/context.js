import { createContext} from "react";
import CandidateData from "../json/candidate_data.json"

const CandidateContext=createContext();

const CandidateState=(props)=>{
    const state=CandidateData

    return(
        <CandidateContext.Provider value={state}>
            {props.children}
        </CandidateContext.Provider>
    )
}

export {CandidateState,CandidateContext}