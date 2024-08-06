interface IChecked {
  checked: boolean;
}
const CustomCheckbox = ({ checked }: IChecked) => {
  return (
    <div
      className={`ml-1 hover:cursor-pointer h-5 w-5 rounded  border-2 transition-transform transform hover:scale-110 duration-300 ${
        checked ? "bg-[#45d3ce] border-[#45d3ce]" : "bg-[#d3454a] border-white"
      }`}
    />
  );
};

export default CustomCheckbox;
