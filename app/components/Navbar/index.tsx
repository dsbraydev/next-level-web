import { Button } from "../shadcn/button";

export default function Navbar() {
  return (
    <div className="flex h-17 bg-[#000] py-3 px-6 justify-between items-center">
      <div className="text-white">logo</div>
      <div className="flex gap-2">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <Button>Logout</Button>
      </div>
    </div>
  );
}
