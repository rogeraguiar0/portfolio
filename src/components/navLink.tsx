import { PropsWithChildren, ReactNode } from "react";

interface iNavLinkProps {
  children: ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: iNavLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="py-1 px-2 relative border border-[#449C95] rounded-tl-md rounded-br-md text-zinc-50 text-sm transition-colors duration-300 hover:bg-[#449C957f] flex justify-center items-center gap-4 outline-none"
    >
      {children}
    </a>
  );
};
