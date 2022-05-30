export default function ProgressLine({step, maxStep}){
    return(
        <div className="line">
            <div className="line__current" style={{'transform': `translateX(${step/maxStep*100}%)`}}/>
        </div>
    )
}