import { Button } from "../shadcn/button";
import { MaskOnIcon } from "@radix-ui/react-icons";
const Navbar = () => {
  return (
    <div className="flex h-16 bg-[#000] py-3 px-6 justify-between items-center border-b-[1px] border-[#0fd3cf]">
      <MaskOnIcon color="#0fd3cf" height={20} width={20} />
      <div className="flex gap-2">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
