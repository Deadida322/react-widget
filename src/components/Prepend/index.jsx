import like from '../../static/img/like.png'
import {QuestionContext} from "../../context/QuestionContext";
import {useContext, useEffect} from "react";
export default function Prepend({prepend}){
    const questionContext = useContext(QuestionContext)
    useEffect(()=>{
        if(!questionContext.loading) {
            questionContext.setLoading(true)
            setTimeout(() => {
                questionContext.onQuestionAsk(prepend.goTo, ['skip'])
                questionContext.setLoading(false)
            }, 2000)
        }
    })
    return(
        <div className="prepend">
            <div className="prepend__img">
                <img src={like}/>
            </div>
            <div className="prepend__title">
                {prepend.prepend}
            </div>
        </div>
    )
}