import VariantItem from "../VariantItem";
import {QuestionContext} from "../../context/QuestionContext";
import {useContext, useEffect, useRef, useState} from "react";

export default function Variants({variants, isMultiple, onVariantCheck}){
    const [answer, setAnswer] = useState([])
    const questionContext = useContext(QuestionContext)
    useEffect(()=>{
        onVariantCheck(answer)
    },
    [answer])
    function onVariantPush(e){
        let newAnswer = [...answer]
        if(newAnswer.includes(e)){
            newAnswer.splice(newAnswer.findIndex(item=>item===e), 1)
        }else{
            newAnswer.push(e)
        }
        setAnswer(newAnswer)
        if(!isMultiple){
            questionContext.onQuestionAsk(
                questionContext.step+1,
                {
                    step: questionContext.stepToDisplay,
                    value: newAnswer
                }
            )
        }
    }
    return (
        <div className="variants_scroll">
            <div className={`variants__wrapper ${isMultiple ? 'variants_multiple':''} `}>
                {
                    variants.map((item, key)=>(
                            <VariantItem
                                className={answer.join(' ').includes(item.value) ? 'selected': ''}
                                onQuestionAsk={onVariantPush}
                                key={key}
                                variant={item}/>
                        )
                    )}
            </div>
        </div>

    )
}