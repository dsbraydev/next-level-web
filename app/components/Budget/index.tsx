import { IFinances } from "@/app/types/budget";
import PageHeader from "../elements/PageHeader";
const Budget = ({ finances }: IFinances) => {
  return (
    <div>
      <PageHeader title="Budget" />
    </div>
  );
};

export default Budget;
