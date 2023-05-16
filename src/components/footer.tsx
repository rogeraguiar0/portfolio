import { BiUpArrow } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="h-28 bg-[#2222227f] text-[#B1CECD] flex flex-col items-center justify-center gap-6 p-2">
      <button
        className="py-1 px-2 relative border border-[#449C95] rounded-tl-md rounded-br-md text-zinc-50 text-sm transition-colors duration-300 hover:bg-[#449C957f] flex justify-center items-center gap-2 outline-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Voltar ao topo
        <BiUpArrow />
      </button>
      <p>Obrigado pela visita! :D</p>
    </footer>
  );
};
