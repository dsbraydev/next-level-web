import { Button } from "../shadcn/button";
import { MaskOnIcon } from "@radix-ui/react-icons";
export default function Navbar() {
  return (
    <div className="flex h-16 bg-[#000] py-3 px-6 justify-between items-center border-b-[1px] border-white">
      <MaskOnIcon color="#0fd3cf" height={20} width={20} />
      <div className="flex gap-2">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        {/* <Button>Logout</Button> */}
      </div>
    </div>
  );
}
