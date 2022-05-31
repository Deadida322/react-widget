import Icon from '@mdi/react';
import {mdiChevronLeft, mdiChevronRight, mdiClose} from '@mdi/js';
import {QuestionContext} from "../../context/QuestionContext";
import {useContext} from "react";
import ProgressLine from "../ProgressLine";
import logo from '../../static/img/logo.png'
const maxStep = 10;

export default function Progress({onStepChange}){
    const questionContext = useContext(QuestionContext)
    const step = questionContext.step
    const stepToDisplay = questionContext.stepToDisplay
    const handleIncrement = (e) => {
        onStepChange(step + 1)
    }
    const handleDecrement = (e) => {
        onStepChange(step - 1)
    }
    return (
        <div className={`progress__wrap ${ step===0 ? 'progress__wrap_intro' : ''}`}>
            <div className="progress__back">
                {
                    (step === 0 || step ===16) ? (
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
            <div className={ step===0 ||step === 16 ? 'd-none' : 'progress__counter'}>
                {stepToDisplay}/{maxStep}
            </div>
            <div className="progress__close">
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
                                  className='center curp'/>
                        )
                }
            </div>
            
                {
                    step !== 0 && 
                    <div className="line_wrapper">
                        <ProgressLine step={stepToDisplay} maxStep={maxStep}/>
                    </div>
                }
            
        </div>
    )
}