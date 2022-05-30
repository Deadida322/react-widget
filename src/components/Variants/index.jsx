import VariantItem from "../VariantItem";
import {QuestionContext} from "../../context/QuestionContext";
import {useContext} from "react";

export default function Variants({variants, isMultiple}){
    let answer = []
    const questionContext = useContext(QuestionContext)
    function onVariantPush(e){
        answer = [...new Set(answer)]
        answer.push(e)
        if(!isMultiple){
            if(answer.length!==0){
                questionContext.onQuestionAsk(
                    questionContext.step+1,
                    {
                        step: questionContext.step,
                        value: answer
                    }
                )
            }
        }
    }
    return (
        <div className="variants__wrapper">
            {
                variants.map((item, key)=>(
                    <VariantItem onQuestionAsk={onVariantPush} key={key} variant={item}/>
                )
            )}
        </div>
    )
}