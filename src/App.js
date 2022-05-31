import {useEffect, useState} from "react";
import Progress from './components/Progress/index'
import quests from "./helpers/questions";

import ovalWoman1 from './static/img/ovalWoman1.svg'
import ovalWoman2 from './static/img/ovalWoman2.svg'
import ovalWoman3 from './static/img/ovalWoman3.svg'
import Question from "./components/Question";
import {QuestionContext} from "./context/QuestionContext";
import Intro from "./components/Intro";
import Outro from './components/Outro'
import womansGlasses1 from './static/img/glasses_woman1.svg'
import womansGlasses2 from './static/img/glasses_woman2.svg'

function App() {
    let [resultQuery, setResultQuery] = useState([])
    const [questions, setQuestions]=useState(quests)
    const [step, setStep] = useState(0);
    let isSkipped = false
    const [stepToDisplay, setStepToDisplay] = useState()
    useEffect(()=>{
        if(!document.getElementById('widget')){
            let style = document.createElement('link')
            style.id = 'widget'
            style.href = './style.css'
            style.rel = 'stylesheet'
            document.querySelector('head').appendChild(style)
        }
    }, [])

    useEffect(() => {
        // console.log('step ',step)
        setStepToDisplay(questions[step - 1]?.step)
    }, [step])

    useEffect(()=>{
        console.log(resultQuery)
        let newQuestions = [...questions]

        if(resultQuery[0]?.value.join() === 'Women\'s style'){
            newQuestions[1].variants = [
                {
                    type: 'col',
                    text: `Eyeglasses`,
                    img: womansGlasses1
                },
                {
                    type: 'col',
                    text: `Sunglasses`,
                    img: womansGlasses2
                }]
            newQuestions[8].variants = [
                {
                    type: 'row',
                    text: `I have a long face`,
                    img: ovalWoman1
                },
                {
                    type: 'row',
                    text: `I have a round face`,
                    img: ovalWoman2
                },
                {
                    type: 'row',
                    text: `In between`,
                    img: ovalWoman3
                }
            ]
        }
        if(resultQuery[4] && resultQuery[4].value[0] !== 'skipp') {
            if (resultQuery[4]?.value[0] !== 'skip') {
                onStepChange(step + 2)
                resultQuery[4].value[0] = 'skipp'

            }

        }
        setQuestions([...newQuestions])
        console.log('questionsNow ', questions)
        console.log('newQuestionsNow ', newQuestions)
    }, [resultQuery])

    function onStepChange(step){
        setStep(step)
    }

    function onQuestionAsk(step, value){
        setStep(step)
        setResultQuery([...resultQuery, value])
    }

  return (
    <div className="App">
        <QuestionContext.Provider value={{resultQuery, onStepChange, step,onQuestionAsk,stepToDisplay}}>
            <Progress onStepChange={onStepChange} />
            {
                step === 0 &&
                <Intro onStepChange={onStepChange}/>
            }
            {
                questions.map((item, key)=>(
                        key+1 === step &&
                            <div className="question_wrap" key={key}>
                                <Question question={item}/>
                            </div>
                    )
                )
            }
            {
                step === 16 &&
                <Outro onStepChange={onStepChange}/>
            }
        </QuestionContext.Provider>
    </div>
  );
}

export default App;
