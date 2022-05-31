import Variants from "../Variants";
import Prepend from "../Prepend";
import {useState} from "react";
import {QuestionContext} from "../../context/QuestionContext";
import {useContext} from "react";
export default function Question({question}){
    const questionContext = useContext(QuestionContext)
    const [checkAnswer, setCheckAnswer] = useState(false)
    const [answer, setAnswer] = useState([])
    const handleContinue = () => {
        questionContext.onQuestionAsk(question.action.goTo, answer)
    }
    const handleBoth = () => {
        questionContext.onQuestionAsk(question.action.goTo, ['both'])
    }
    const handleSkip = () => {
        questionContext.onQuestionAsk(question.action.goTo, ['skip'])
    }
    const handleCheck = (ans) => {
        let newAnswer = [...ans]
        setAnswer(newAnswer)
        if(ans.length){
            setCheckAnswer(true)
        }else{
            setCheckAnswer(false)
        }
    }
    const getType = (action) => {
        switch (action?.type) {
            case 'skip':
                return (
                    <div onClick={handleSkip} className='question_skip'>
                        {action.text}
                    </div>
                )
            case 'both':
                return (
                    <div onClick={handleBoth} className='question_skip'>
                        {action.text}
                    </div>
                )
            case 'continue':
                return (
                    <div onClick={handleContinue} className={`question_skip intro__btn ${!checkAnswer ? 'btn--disabled':''} `}>
                        {action.text}
                    </div>
                )
            default:
                return
        }
    }
    return(
        <div className="question">
            <div className="question__title">
                {question?.title}
            </div>
            {
                question.subtitle &&
                <div className="question__subtitle">
                    {question?.subtitle}
                </div>
            }
            {
                question.image &&
                <div className="question__image">
                    <img src={question.image} alt=""/>
                </div>
            }
            {
                !question.prepend ?
                <Variants onVariantCheck={handleCheck} isMultiple={question.isMultiple} variants={question.variants}/>
                    :
                <Prepend prepend={question}/>
            }
            {
               getType(question?.action)
            }
        </div>
    )
}