interface IChecked {
  checked: boolean;
}
const CustomCheckbox = ({ checked }: IChecked) => {
  return (
    <div
      className={`h-5 w-5 rounded border-white border-2 ${
        checked ? "bg-[#45d3ce]" : "bg-white"
      }`}
    />
  );
};

export default CustomCheckbox;
