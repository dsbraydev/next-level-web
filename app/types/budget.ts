export interface IExpences {
    name: string;
    amount: number;
    type: string;
  }

  export interface IIncome {
    amount: number;
    additionalIncome: number;
    tax: number;
    expenses: IExpences[];
  }
  
  export interface IFinances {
    finances: IIncome;
  }