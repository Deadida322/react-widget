import {createContext} from 'react'
export const QuestionContext = createContext({
    resultQuery: [],
    step: 0,
    stepToDisplay: 0,
    onStepChange: ()=>{},
    onQuestionAsk: ()=>{}
})
