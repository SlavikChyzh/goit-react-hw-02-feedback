export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
(
  <>
    <p>Statistic</p>
    <p>Good : {good}</p>
    <p>Neutral : { neutral}</p>
    <p>Bad : {bad}</p>
    <p>Total : {total}</p>
    <p>Positive feedbacks : {positivePercentage}% </p>
  </>
)