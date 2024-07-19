import { columns } from "../elements/TableData/columns";
import { DataTable } from "../elements/TableData";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="p-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
