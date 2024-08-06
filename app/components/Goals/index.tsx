import { columns } from "../elements/TableData/columns";
import { DataTable } from "../elements/TableData";
import PageHeader from "../elements/PageHeader";
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
    },
  ];
}

const Goals = async () => {
  const data = await getData();
  return (
    <div>
      <PageHeader header="Goals" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Goals;
