import VariantItem from "../VariantItem";
import {QuestionContext} from "../../context/QuestionContext";
import {useContext, useEffect, useRef, useState} from "react";

export default function Variants({variants, isMultiple, onVariantCheck}){
    const [answer, setAnswer] = useState([])
    const questionContext = useContext(QuestionContext)
    useEffect(()=>{
        onVariantCheck(answer)
        console.log(answer)
    },
    [answer])
    function onVariantPush(e){
        let newAnswer = [...answer]
        if(newAnswer.includes(e)){
            console.log('тута')
            newAnswer.splice(newAnswer.findIndex(item=>item===e), 1)
        }else{
            newAnswer.push(e)
        }
        setAnswer(newAnswer)
        if(!isMultiple){
            questionContext.onQuestionAsk(
                questionContext.step+1,
                {
                    step: questionContext.step+1,
                    value: answer
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
                                className={answer.join(' ').includes(item.text) ? 'selected': ''}
                                onQuestionAsk={onVariantPush}
                                key={key}
                                variant={item}/>
                        )
                    )}
            </div>
        </div>

    )
}