import firstGlasses from '../../static/img/firstGlasses.png'
export default function Intro({onStepChange}) {
    function handleClick(){
        onStepChange(1)
    }
    return (
        <div className="intro__wrapper">
            <img src={firstGlasses} alt="" className="intro__img"/>
            <div className="intro__header">
                Let’s find your perfect pair!
            </div>
            <div className="intro__text">
                Take the quiz to easily discover your perfect fit from thousands of styles
            </div>
            <button onClick={handleClick} className="intro__btn">
                Start Now
            </button>
        </div>
    )
}