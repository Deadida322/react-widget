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
    const formedQuery = ''
    const [resultQuery, setResultQuery] = useState([])
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
        setStepToDisplay(questions[step - 1]?.step)
       
    }, [step])

    useEffect(() => {
        setResultQuery(resultQuery.filter(item => item.step !== step))
    }, [stepToDisplay, step, resultQuery])

    useEffect(()=>{
        
        console.log(resultQuery)
        let newQuestions = [...questions]

        if(resultQuery[0]?.value.join() === '5'){
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
        if(resultQuery[4] &&step ===7) {
            console.log(step)
            if (resultQuery[4]?.value[0] !== 'skip') {
                onStepChange(step + 2)
            }
        }

        if(resultQuery[2] && step ===5) {
            
            if (resultQuery[2]?.value.join().includes('skip')) {
                // onStepChange(questions.findIndex(item => item.step === questions[step - 2].step + 1))
                onStepChange(step + 1)
            }
            else if (resultQuery[2]?.value.join().includes('next')) {
                console.log('3 next')
            }
        }
        // if(resultQuery[4] &&step ===7) {
        //     console.log(step)
        //     if (resultQuery[4]?.value[0] !== 'skip') {
        //         onStepChange(step + 2)
        //     }
        // }
        setQuestions([...newQuestions])
        setResultQuery(resultQuery)
        queryForming()
    }, [resultQuery])

    function onStepChange(step){
        // console.log('MJCDKJKDCKNCDKJNCNKJCDKNCDK');
        setStep(step)
        
    }
    function onClose() {
        setStep(0);
        setResultQuery([]);
    }
    function queryForming(){
        let result = {}
        for(let item of resultQuery){
            if (result[item.step]){
                if(!result[item.step].includes(item.value.join())){
                    result[item.step].push(item.value.join())
                }
            }else{
                result[item.step] = item.value
            }
        }
        let stringToDisplay = ''

        for(let key of Object.keys(result)){
            if(
                !(result[key].join(',').replaceAll('skip', '') === '' ||
                (result[key].join(',').replaceAll('skip', '') === ','))
            ){
                stringToDisplay+=`screen_${key}=${result[key].join(',').replaceAll('skip','')}&`
            }
        }
        console.log(stringToDisplay.slice(0,-1))
    }

    function onQuestionAsk(step, value){
        setStep(step)
        setResultQuery([...resultQuery, value])
    }

  return (
    <div className="App">
        <QuestionContext.Provider value={{resultQuery, onStepChange, step,onQuestionAsk,stepToDisplay}}>
            <Progress onStepChange={onStepChange} onClose={onClose} />
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
