import { Pencil2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
interface PageHeaderProps {
  title: string;
  openPopUp: () => void;
}

export default function PageHeader({ title, openPopUp }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl uppercase text-[#f57c00] font-bold">{title}</h1>
      <div className="flex items-center gap-5">
        <div
          className="cursor-pointer hover:opacity-60 duration-300"
          onClick={openPopUp}
        >
          <Pencil2Icon color="#f57c00" height={25} width={25} />
        </div>
        <div className="cursor-pointer hover:opacity-60 duration-300">
          <PlusCircledIcon color="#f57c00" height={25} width={25} />
        </div>
      </div>
    </div>
  );
}
