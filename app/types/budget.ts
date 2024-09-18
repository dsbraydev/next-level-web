export type IExpense = {
  name: string;
  amount: number;
  type: string;
}

export type IFinances = {
  income: number;
  additionalIncome: number;
  tax: number;
  expenses: IExpense[];
}

export type IBudget = {
  finances: IFinances;
}

export interface IIncome {
  income: number;
  additionalIncome: number;
  tax: number;
}

export interface IExpenses {
  expenses: IExpense[];
}
