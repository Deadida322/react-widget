import {useEffect, useState} from "react";
import Progress from './components/Progress/index'
import quests from "./helpers/questions";
import Question from "./components/Question";
import {QuestionContext} from "./context/QuestionContext";
import Intro from "./components/Intro";
import Outro from './components/Outro'



function App() {
    let [ref, setRef] = useState('')
    let [query, setQuery] = useState('')
    let [loading, setLoading] = useState(false)
    let [answers, setAnswers] = useState([])
    let [external, setExternal] = useState(0)
    let [internal, setInternal] = useState(0)
    const [resultQuery, setResultQuery] = useState([])
    const [questions, setQuestions]=useState(quests)

    function onStepChange(){

    }
    function onExternalChange(i){
        setExternal(i)
    }
    function onInternalChange(i){
        setInternal(i)
    }
    function onQuestionAsk(goTo, answer){
        let newAnswers = [...answers]
        newAnswers[external] = answer
        if(newAnswers[1]?.join() == 'skip'){ /// проверка на два пола
            let newQuestions = [...questions]
            for (let item of newQuestions[4][0].variants){
                item.goTo = [6,2]
            }
            for (let item of newQuestions[4][1].variants){
                item.goTo = [6,2]
            }
            setQuestions(newQuestions)
        }
        if(newAnswers[1]?.join() == 4){ //на мужика
            let newQuestions = [...questions]
            for (let item of newQuestions[4][0].variants){
                item.goTo = [6,0]
            }
            for (let item of newQuestions[4][1].variants){
                item.goTo = [6,0]
            }
            setQuestions(newQuestions)
        }
        if(newAnswers[1]?.join() == 5){ //на бабу
            let newQuestions = [...questions]
            for (let item of newQuestions[4][0].variants){
                item.goTo = [6,1]
            }
            for (let item of newQuestions[4][1].variants){
                item.goTo = [6,1]
            }
            setQuestions(newQuestions)
        }
        if(newAnswers[2]?.join() == 210){ //eyeglasses
            let newQuestions = [...questions]
            for (let item of newQuestions[3][0].variants){
                item.goTo = [5,0]
            }
            for (let item of newQuestions[3][2].variants){
                item.goTo = [5,0]
            }
            setQuestions(newQuestions)
        }
        else if (newAnswers[2]?.join() == 211){
            let newQuestions = [...questions]
            for (let item of newQuestions[3][0].variants){
                item.goTo = [5,1]
            }
            for (let item of newQuestions[3][2].variants){
                item.goTo = [5,1]
            }
            setQuestions(newQuestions)
        }
        setAnswers(newAnswers)
        external = goTo[0]
        internal = goTo[1]
        setExternal(goTo[0])
        setInternal(goTo[1])
    }
    function onClose(){
        setExternal(0)
    }
    useEffect(()=>{
        queryForming()
    }, [answers])

    useEffect(()=>{
        if(!document.getElementById('widget')){
            let style = document.createElement('link')
            style.id = 'widget'
            style.href = './style.css'
            style.rel = 'stylesheet'
            document.querySelector('head').appendChild(style)
        }
        else {
            setRef(document.getElementById('glasses-quiz-widget').getAttribute('data-source'))
        }
    }, [])

    function queryForming(){
        let resultString = ''
        for (let i in answers){
            if(answers[i]){
                if(answers[i].join(',').replaceAll('skip', '')){
                    resultString+=`screen_${i}=${answers[i].join(',')}&`
                }
                resultString = resultString
                    .replace('screen_10', 'brand')
                    .replace('screen_1', 'gender')
                    .replace('screen_2', 'eyewear_type')
                    .replace('screen_3', 'lenstype')
                    .replace('screen_4', 'frame_size')
                    .replace('screen_6', 'face_shape')
                    .replace('screen_7', 'facial_features')
                    .replace('screen_8', 'shape')


                if(answers[2]?.join() == 210){
                    resultString = resultString.replace('screen_5', 'blue_light')
                }else if(answers[2]?.join() == 211){
                    resultString = resultString.replace('screen_5', 'shade')
                }
                setQuery(ref+resultString.slice(0,-1))
            }
        }
    }
    function final(){
        console.log(query)
    }
  return (
    <div className="App">
        <QuestionContext.Provider value={{resultQuery, onQuestionAsk, onStepChange, loading, setLoading, external, internal, onExternalChange, onInternalChange}}>
            <Progress onStepChange={onStepChange} onClose={onClose} />
            {
                external === 0 &&
                <Intro onExternalChange={onExternalChange}/>
            }

            {
                questions.map((i, key)=>(
                    i.map((j, jey)=>(
                        external-1 === key && internal === jey &&
                            <div key={jey} className={`question_wrapper`}>
                                <Question question={j}/>
                            </div>
                        )
                    ))
                )
            }

            {
                external === 11 &&
                <Outro onStepChange={onStepChange} final={final}/>
            }
        </QuestionContext.Provider>
    </div>
  );
}

export default App;
