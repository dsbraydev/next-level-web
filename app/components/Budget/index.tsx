import { INCOME, EXPENSES } from "./incomeData";
import ExpensesBlock from "./ExpenseBlock";
import IncomeBlock from "./IncomeBlock";
import PageHeader from "../elements/PageHeader";
const Budget = () => {
  return (
    <div>
      <PageHeader header="Budget" />
      <div className="flex gap-10">
        <IncomeBlock />
        <div className="grid grid-cols-2 w-full gap-10">
          {EXPENSES.map((group) => (
            <ExpensesBlock key={group.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
