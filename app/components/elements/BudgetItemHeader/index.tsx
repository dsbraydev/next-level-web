interface IHeader {
  title: string;
}

const BudgetItemHeader = ({ title }: IHeader) => {
  return (
    <div className="bg-[#d36f30] p-2 border-b-[1px] w-full text-black capitalize rounded-t-md">
      {title}
    </div>
  );
};

export default BudgetItemHeader;
