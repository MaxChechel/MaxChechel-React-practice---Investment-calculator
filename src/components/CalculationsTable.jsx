import { calculateInvestmentResults, formatter } from "../util/investment";

export default function CalculationsTable(props) {
  const results = calculateInvestmentResults(props.userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Initial Investment</th>
          <th>Annual Investment</th>
          <th>Expected Return</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            initialInvestment -
            result.annualInvestment * result.year;
          const totalAmount = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{totalAmount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
