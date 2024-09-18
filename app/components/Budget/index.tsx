"use client";
import { IBudget } from "@/app/types/budget";
// COMPONENTS
import { PageHeader } from "../elements";
import IncomeBlock from "./IncomeBlock";
import ExpenseBlock from "./ExpenseBlock";

const Budget = ({ finances }: IBudget) => {
  const { income, additionalIncome, tax, expenses } = finances;
  return (
    <div>
      <PageHeader title="Budget" />
      <div className="flex gap-10 items-start">
        <IncomeBlock
          income={income}
          additionalIncome={additionalIncome}
          tax={tax}
        />
        <ExpenseBlock expenses={expenses} />
      </div>
    </div>
  );
};

export default Budget;
