import "./Timer.scss";
const Timer=(props)=>{
    return(
        <div className="timer">
            <div className="timer__item"> {(props.timer.h<10)?"0"+props.timer.h:props.timer.h}: </div>
            <div className="timer__item"> {(props.timer.m <10)?"0"+props.timer.m:props.timer.m}: </div>
            <div className="timer__item"> {(props.timer.s<10)?"0"+ props.timer.s:props.timer.s} </div>
        </div>
    );
}

export default Timer;