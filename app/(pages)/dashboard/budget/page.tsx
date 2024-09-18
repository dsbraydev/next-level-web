import { client } from "@/sanity/client";
const options = { next: { revalidate: 60 } };

// Define the query as a plain string
const FINANCES_QUERY = `*[
  _type == "finances"
][0]{
  _id,
  income,
  tax,
  expenses[]->{
    name,
    amount,
    type
  }
}`;

export default async function BudgetPage() {
  const finances = await client.fetch(FINANCES_QUERY, {}, options);
  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}
