import Variants from "../Variants";
import Prepend from "../Prepend";
export default function Question({question}){
    return(
        <div className="question">
            <div className="question__title">
                {question?.title}
            </div>
            {
                question.image &&
                <div className="question__image">
                    <img src={question.image} alt=""/>
                </div>
            }
            {
                !question.prepend ?
                <Variants isMultiple={question?.isMultiple} variants={question.variants}/>
                    :
                <Prepend prepend={question.prepend}/>
            }
        </div>
    )
}