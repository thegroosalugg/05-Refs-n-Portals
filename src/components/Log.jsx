export default function Log({ scores }) {
  return (
    <ul id="">
      {scores.map((score, index) => (
        <li key={index}>
          Timer: {score.timer} seconds / Score: {score.score}
        </li>
      ))}
    </ul>
  );
}
