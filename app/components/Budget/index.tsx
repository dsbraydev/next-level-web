"use client";
import { useState } from "react";
import { IBudget } from "@/app/types/budget";
// COMPONENTS
import { PageHeader, PopOver } from "../elements";
import IncomeBlock from "./IncomeBlock";
import ExpenseBlock from "./ExpenseBlock";
import EditFinances from "./EditFinances";

const Budget = ({ finances }: IBudget) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openEdit = () => setIsEditOpen(true);
  const closeEdit = () => setIsEditOpen(false);

  const { income, additionalIncome, tax, expenses } = finances;
  return (
    <div>
      <PageHeader title="Budget" openPopUp={openEdit} />
      <div className="flex gap-10 items-start">
        <IncomeBlock
          income={income}
          additionalIncome={additionalIncome}
          tax={tax}
        />
        <ExpenseBlock expenses={expenses} />
      </div>
      <PopOver isOpen={isEditOpen}>
        <EditFinances finances={finances} />
      </PopOver>
    </div>
  );
};

export default Budget;
