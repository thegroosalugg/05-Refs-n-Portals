import { forwardRef, useRef, useImperativeHandle } from "react"; // react component that allows the forwarding of useReg from one component to another
// said ref must wrap a functio that is stored in a constant
// the ref passed through cannot be destructured, it is passed as a second argument
// by passing the ref to show the dialog it allows a dimming of the background, not supported without using the ref

const FAIL = ['Massive Fail', 'Reactions of a Snail', 'Terrible', 'Just Awful', 'So Slow', 'Do Better']

function sampleArray(arr) { return arr[Math.floor(Math.random() * arr.length)] }; // random number generator
  // chosen array selects index via random number

const ResultsModal = forwardRef(function ResultsModal({ timeLeft, targetTime, onReset }, ref) {
  const dialog = useRef()

  const score = Math.round((1- timeLeft / (targetTime * 1000)) * 100)

  // imperative handle is intended to work with forward ref. It detaches the component so that it may be used again...
  // ...if the code in the return function changes, i.e. <dialog> becomes a <div> and no showModal() no longer works
  // imperative handle takes 2 arguments, one must be the forwarded ref, and the second is a function...
  // ... the HTML code can then be changed as needed, as long as the imperative function is kept up to date as well
  // forwardRef must always take 2 parameters, the 2nd being ref, if no 1st parameter is required, use an empty placeholder (_, ref)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  // useImperativeHandle is used to expose a method (open) of the ResultsModal component to the parent (Timer).
  // This allows the parent to control when the modal should be opened

  return (
    // < dialog className="result-modal" open > Dialog is hidden by default, 'open' makes it visible
    <dialog className="result-modal" ref={dialog} onClose={onReset}> {/* with imperative handle the new ref declared within is now passed */}
      {timeLeft <= 0 && <h2>{sampleArray(FAIL)}</h2>} {/* onClose is a built-in listener that will pass handleReset if the dialog is closed with ESC instead of button */}
      {timeLeft > 0 && <h2>Score: {score}</h2>}
      <p>
        Target Time: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        Timer stopped with <strong>{(timeLeft / 1000).toFixed(2)} seconds remaining</strong>
      </p>
      <form method="dialog" onSubmit={onReset}> {/* onDubmit is a react method which will execute function when nested button clicked */}
        {/* form dialog is a built-in HTML function, the button will know how to close the dialogue of the main parent element*/}
        <button>close</button>
      </form>
    </dialog>
  );
})

export default ResultsModal

// forwardRef syntax: store a function inside the forwardRef feature which is stored again inside a constant
// const YourConstant = forwardRef( function YourFunction(...props, ref) { execute function code } )
