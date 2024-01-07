const formatter = (number) => number.toString().padStart(2, '0'); // adds leading zero to keep all styles in line with double digits

export default function Log({ scores }) {
  return (
    <ul id="log">
      {scores.map((score, index) => (
        <li key={index}>
          Timer: {formatter(score.timer)} seconds -- Score: {formatter(score.score)}
        </li>
      ))}
    </ul>
  );
}
