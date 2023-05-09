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
      className="py-1 px-2 relative border border-zinc-300 text-zinc-50 text-sm transition-colors duration-300 hover:text-zinc-800 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-0 before:bg-zinc-50 before:z-[-1] before:transition-transform before:ease-[cubic-bezier(0.5,1.6,0.4,0.7)] hover:before:scale-x-100 flex justify-center items-center gap-4"
    >
      {children}
    </a>
  );
};
