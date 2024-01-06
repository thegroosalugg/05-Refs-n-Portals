export default function ResultsModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open> {/* Dialog is hidden by default, 'open' makes it visible */}
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
}
