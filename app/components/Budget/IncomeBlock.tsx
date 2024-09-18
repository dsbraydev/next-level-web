import { IIncome } from "@/app/types/budget";
import { BudgetItemHeader, BudgetItemAmount } from "../elements";
const IncomeBlock = ({ income }: IIncome) => {
  return (
    <div className="w-[33%] border-[#2f2d2d] rounded-md border-2 overflow-hidden">
      <BudgetItemHeader title="Overall" />
      <div className="flex gap-8 flex-col p-3">
        <div className="flex flex-col gap-2">
          <BudgetItemAmount label="Income" amount={income} />
          <BudgetItemAmount label="Additional Income" amount={0} />
          <BudgetItemAmount label="Expences" amount={0} />
        </div>
        <BudgetItemAmount label="Total" amount={0} />
      </div>
    </div>
  );
};

export default IncomeBlock;
