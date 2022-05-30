import {useEffect, useState} from "react";
import Progress from './components/Progress/index'
import man from './static/img/man.svg'
import woman from './static/img/woman.svg'
import five1 from './static/img/darkShade1.svg'
import five2 from './static/img/LightShade2.svg'
import five3 from './static/img/TransitionShade3.svg'
import six1 from './static/img/six1.svg'
import six2 from './static/img/six2.svg'
import six3 from './static/img/six3.svg'
import Question from "./components/Question";
import {QuestionContext} from "./context/QuestionContext";
import Intro from "./components/Intro";
import fourthSlide from './static/img/4lide.png'

function App() {
    let [resultQuery, setResultQuery] = useState([])
    const quests = [
        {
            step: 1,
            title: `You're looking for?`,
            variants: [
                {
                    type: 'col',
                    text: `Women's style`,
                    img: woman
                },
                {
                    type: 'col',
                    text: `Man's style`,
                    img: man
                }
            ]
        },
        {
            step: 2,
            title: `What type of glasses are you looking for?`,
            variants: [
                {
                    type: 'col',
                    text: `Women's style`,
                    img: woman
                },
                {
                    type: 'col',
                    text: `Man's style`,
                    img: man
                }
            ]
        },
        {
            step: 3,
            prepend: `Let's get to know you!`
        },
        {
            step: 3,
            title: 'Do you need vision correction?',
            variants: [
                {
                    type: 'col',
                    text: `yes`,
                },
                {
                    type: 'col',
                    text: `no`,
                }
            ]
        },
        {
            step: 3,
            title: 'What do you need your glasses for?',
            variants: [
                {
                    type: 'col',
                    text: `Near Vision`,
                },
                {
                    type: 'col',
                    text: `Distance Vision`,
                },
                {
                    type: 'col',
                    text: `Multifocal / Progressive`,
                },
            ]
        },
        {
            step: 4,
            image: fourthSlide,
            title: 'What’s your current frame size?',
            variants: [
                {
                    bold: '42-48мм',
                    type: 'col',
                    text: `Small`,
                },
                {
                    bold: '49-53мм',
                    type: 'col',
                    text: `Medium`,
                },
                {
                    type: 'col',
                    text: `Large`,
                    bold: '54-58мм'
                },
            ]
        },
        {
            step: 5,
            title: 'What’s your current frame size?',
            variants: [
                {
                    type: 'col',
                    text: `Yes`,
                },
                {
                    type: 'col',
                    text: `No`,
                }
            ]
        },
        {
            step: 5,
            title: 'When you’re out and about, which shade of lenses do you prefer?',
            variants: [
                {
                    img: five1,
                    type: 'row',
                    text: `Dark Shade`,
                },
                {
                    img: five2,
                    type: 'row',
                    text: `Light Shade`,
                },
                {
                    img: five3,
                    type: 'row',
                    text: `Transitioning Shade`,
                }
            ]
        },
        {
            step: 6,
            title: 'Every face shape has a perfect fit. What’s yours?',
            variants: [
                {
                    img: six1,
                    type: 'row',
                    text: `I have a long face`,
                },
                {
                    img: six2,
                    type: 'row',
                    text: `I have a round face`,
                },
                {
                    img: six3,
                    type: 'row',
                    text: `In between`,
                }
            ]
        }
    ]
    const [questions, setQuestions]=useState(quests)
    const [step, setStep] = useState(0);
    const [stepToDispay, setStepToDispay] = useState(0)
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
        console.log(step)
        setStepToDispay(questions[step]?.step)
    }, [step])

    useEffect(()=>{
        if(resultQuery[0]?.value.join() === 'Women\'s style'){
            console.log(
                'бабский стиль'
            )
            let newQuestions = [...questions]
            newQuestions[1].variants = [
                {
                    type: 'col',
                    text: `бабский стиль`,
                    img: woman
                },
                {
                    type: 'col',
                    text: `Man's style`,
                    img: man
                }]
            setQuestions([...newQuestions])
        }
    }, [resultQuery])

    function onStepChange(step){
        setStep(step)
    }

    function onQuestionAsk(step, value){
        setStep(step)
        setResultQuery([...resultQuery, value])
        console.log(resultQuery[step])
    }


  return (
    <div className="App">
        <QuestionContext.Provider value={{resultQuery, onStepChange, step,onQuestionAsk}}>
            <Progress onStepChange={onStepChange} />
            {
                step === 0 &&
                <Intro onStepChange={onStepChange}/>
            }
            {
                questions.map((item, key)=>(
                        <div key={key}>
                            { key+1===step && <Question question={item}/>}
                        </div>
                    )
                )
            }
        </QuestionContext.Provider>
    </div>
  );
}

export default App;
