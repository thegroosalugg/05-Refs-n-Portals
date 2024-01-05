export default function Timer({ title, timer }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {timer} second{timer > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start</button>
      </p>
      <p className="">Timer Running / Inactive</p>
    </section>
  );
}
