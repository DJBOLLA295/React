import ButtonTimer from "./Button";

const Controls = ({ isRunning, onStartStop, onReset }) => {
    return (
      <div className="flex gap-2 xs:gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center"> 
    <ButtonTimer
        onClick={onStartStop}
        className={`
            ${isRunning ? "bg-rosso hover:bg-bordoo" : "bg-verde hover:bg-verdeScuro"}
        `}
    >
        {isRunning ? "Stop" : "Start"}
    </ButtonTimer>
    <ButtonTimer
        onClick={onReset} 
        className="bg-blu  
        ">
        Reset
    </ButtonTimer>
</div>
    );
  };
  
  export default Controls;
  