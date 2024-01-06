import { forwardRef } from "react"; // react component that allows the forwarding of useReg from one component to another
// said ref must wrap a functio that is stored in a constant
// the ref passed through cannot be destructured, it is passed as a second argument
// by passing the ref to show the dialog it allows a dimming of the background, not supported without using the ref

const ResultsModal = forwardRef(function ResultsModal({ result, targetTime }, ref) {
  return (
    // <dialog className="result-modal" open> Dialog is hidden by default, 'open' makes it visible
    <dialog className="result-modal" ref={ref}>
      <h2>{result}</h2>
      <p>
        Target Time: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        Timer stopped with <strong>N seconds remaining</strong>
      </p>
      <form method="dialog">
        {/* form dialog is a built-in HTML function, the button will know how to close the dialogue of the main parent element*/}
        <button>close</button>
      </form>
    </dialog>
  );
})

export default ResultsModal

// forwardRef syntax: store a function inside the forwardRef feature which is stored again inside a constant
// const YourConstant = forwardRef( function YourFunction(...props, ref) { execute function code } )
