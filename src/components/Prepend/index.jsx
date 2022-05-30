import like from '../../static/img/like.svg'
import {QuestionContext} from "../../context/QuestionContext";
import {useContext} from "react";
export default function Prepend({prepend}){
    const questionContext = useContext(QuestionContext)
    function handleClick(){
        questionContext.onStepChange(questionContext.step+1)
    }
    return(
        <div onClick={handleClick} className="prepend">
            <div className="prepend__img">
                <img src={like}/>
            </div>
            <div className="prepend__title">
                {prepend}
            </div>
        </div>
    )
}