import {
  AlertDialog,
  AlertDialogContent,
} from "@/app/components/shadcn/alert-dialog";

interface PopOverProps {
  children: React.ReactNode;
  isOpen: boolean;
}
const PopOver = ({ children, isOpen }: PopOverProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default PopOver;
