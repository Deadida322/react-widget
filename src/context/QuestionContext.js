import {createContext} from 'react'
export const QuestionContext = createContext({
    resultQuery: [],
    step: 0,
    stepToDisplay: 0,
    onStepChange: ()=>{},
    loading: false,
    setLoading: ()=>{},
    onQuestionAsk: ()=>{},
    internal: 0,
    external: 0,
    onExternalChange: ()=> {},
    onInternalChange: ()=> {},
})
