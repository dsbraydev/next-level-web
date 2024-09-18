interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl uppercase text-[#f57c00] font-bold">{title}</h1>
    </div>
  );
}
