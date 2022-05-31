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
        if(!isMultiple) newAnswer = []

        if(newAnswer.includes(e.value)){
            newAnswer.splice(newAnswer.findIndex(item=>item===e.value), 1)
        }else{
            newAnswer.push(e.value)
        }
        setAnswer(newAnswer)
        if(!isMultiple){
            questionContext.onQuestionAsk(
                e.goTo,
                newAnswer
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