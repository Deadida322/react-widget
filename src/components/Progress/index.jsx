import Icon from '@mdi/react';
import {mdiChevronLeft, mdiChevronRight, mdiClose} from '@mdi/js';
import {QuestionContext} from "../../context/QuestionContext";
import {useContext, useEffect} from "react";
import ProgressLine from "../ProgressLine";
import logo from '../../static/img/logo.png'
let maxStep = 10;

export default function Progress({onStepChange, onClose}){

    const questionContext = useContext(QuestionContext)
    const step = questionContext.external
    let stepToDisplay = questionContext.external
    useEffect(()=>{
        if (stepToDisplay> maxStep) maxStep=stepToDisplay
    }, [step])
    const handleIncrement = (e) => {
        questionContext.onExternalChange(step + 1)
        questionContext.onInternalChange(0)
    }
    const handleDecrement = (e) => {
        questionContext.onExternalChange(step - 1)
        questionContext.onInternalChange(0)
    }
    const handleClose = (e) => {
        onClose()
    }
    return (
        <div className={`progress__wrap ${ step===0 ? 'progress__wrap_intro' : ''}`}>
            <div className={`progress__back ${questionContext.loading?'no-actions':''}`}>
                {
                    (step === 0 || step ===11) ? (
                            <img className="progress__logo" src={logo} alt=""/>
                        ) :
                        (
                            <Icon path={mdiChevronLeft}
                                  size={1}
                                  onClick={handleDecrement}
                                  className='center curp'/>
                        )
                }
            </div>
            <div className={ step===0 ||step === 11 ? 'd-none' : 'progress__counter'}>
                {stepToDisplay}/{maxStep}
            </div>
            <div className={`progress__close ${questionContext.loading ? 'no-actions' : '' }`}>
                {
                    (step === 0) ?
                        (
                            <Icon path={mdiChevronRight}
                                  size={1}
                                  onClick={handleIncrement}
                                  className='center curp'/>
                        ) :
                        (
                            <Icon path={mdiClose }
                                  size={1}
                                  onClick={handleClose}
                                  className='center curp'/>
                        )
                }
            </div>
            
                {
                    step !== 0 && 
                    <div className="line_wrapper">
                        <ProgressLine step={stepToDisplay} maxStep={stepToDisplay+1>maxStep?stepToDisplay:maxStep}/>
                    </div>
                }
            
        </div>
    )
}