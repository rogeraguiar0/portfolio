import { BiUpArrow } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="h-28 bg-zinc-800 border-t border-zinc-600 text-zinc-50 flex flex-col items-center justify-center gap-6 p-2">
      <button
        className="bg-zinc-900 p-2 rounded flex items-center gap-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Voltar ao topo
        <BiUpArrow />
      </button>
      <p>Obrigado pela visita!</p>
    </footer>
  );
};
