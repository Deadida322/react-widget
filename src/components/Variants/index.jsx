import VariantItem from "../VariantItem";
import {QuestionContext} from "../../context/QuestionContext";
import {useContext, useEffect, useRef, useState} from "react";

export default function Variants({variants, isMultiple, onVariantCheck}){
    let initTouch = 0
    const [answer, setAnswer] = useState([])
    const questionContext = useContext(QuestionContext)
    function makeScroll(e){

    }
    useEffect(()=>{
        onVariantCheck(answer)
    },
    [answer])

    useEffect(()=>{
        if(!isMultiple) return

        const container = document.querySelector('.variants_scroll')
        container.onwheel = e =>{
            if(e.deltaX) return
            let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
            container.scrollLeft +=delta*40
        }
        return ()=>{
            container.onwheel = e =>{
                return
            }

        }
    })
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