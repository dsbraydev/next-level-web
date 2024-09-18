interface IBudgetItemAmount {
  amount: number;
  label: string;
}
const BudgetItemAmount = ({ amount, label }: IBudgetItemAmount) => {
  return (
    <div className="flex justify-between">
      <p>{label}:</p>
      <p>R {amount}</p>
    </div>
  );
};
export default BudgetItemAmount;
