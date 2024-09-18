import { columns } from "../elements/TableData/columns";
import { DataTable } from "../elements/TableData";

async function getData(): Promise<any[]> {
  return [
    {
      id: "1",
      running: "5",
      trading: true,
      water: "5",
      reading: true,
      gym: false,
      carnivore: true,
      bible: true,
      topG: true,
    },
    {
      id: "2",
      running: "5",
      trading: true,
      water: "5",
      reading: true,
      gym: false,
      carnivore: true,
      bible: true,
      topG: true,
    },
  ];
}

export default async function Goals() {
  const data = await getData();
  return (
    <div className="p-5">
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  );
}
