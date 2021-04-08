import "./Btn.scss";

const Btn = (props) => {
  return (
    <div className='wrapper-btn'>
      <button className="wrapper-btn__btn" onClick={props.start}>
        Start
      </button>
      <button className="wrapper-btn__btn" onClick={props.stop}>
        Stop
      </button>
      <button className="wrapper-btn__btn" onClick={props.reset}>
        Reset
      </button>
      <button className="wrapper-btn__btn" onDoubleClick={props.wait}>
        wait
      </button>
    </div>
  );
};

export default Btn;
