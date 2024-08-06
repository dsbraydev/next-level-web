"use client";
import { Button } from "../shadcn/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Goals",
    href: "/dashboard/goals",
  },
  {
    label: "Journal",
    href: "/dashboard/journal",
  },
  {
    label: "Training",
    href: "/dashboard/training",
  },
];

interface LinkProps {
  label: string;
  href: string;
}

const Sidebar = () => {
  const path = usePathname();
  const dashboard = (path: string) => path.includes("/dashboard");

  if (!dashboard(path)) return null;
  return (
    <div
      className="bg-[#181717] p-5 flex flex-col gap-4"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {SIDEBAR_LINKS.map((link: LinkProps, i: number) => {
        return (
          <Link key={i} href={link.href}>
            <Button className="w-full bg-[#0fd3cf] hover:opacity-80 hover:bg-[#0fd3cf] transition duration-300 text-black">
              {link.label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};
export default Sidebar;
