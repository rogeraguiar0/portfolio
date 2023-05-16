import { iRepo } from "@/@types";
import { GoMarkGithub, GoRocket } from "react-icons/go";

interface iRepoProps {
  repo: iRepo;
}

export const Repo = ({ repo }: iRepoProps) => {
  const handleDescription = () => {
    if (repo.description.length > 97) {
      return `${repo.description}...`;
    }

    return repo.description;
  };

  return (
    <li className="w-full flex flex-col gap-2 bg-[#2222227f] backdrop-blur-sm rounded">
      <h3 className="text-lg bg-[#B1CECD] text-[#001F26] rounded-tl-sm rounded-tr-sm font-semibold py-2 px-4">
        {repo.name}
      </h3>

      <p className="px-4">{repo.description ? handleDescription() : "..."}</p>

      <div className="flex justify-between px-4 pb-4">
        <span
          className={`bg-[#58676B] rounded cursor-default ${
            repo.language && "px-2 py-1"
          }`}
        >
          {repo.language}
        </span>

        <div className="flex gap-2">
          <a
            className="bg-[#222222] w-fit py-1 px-2 rounded flex items-center gap-2 self-end hover:bg-[#174D4C] transition-colors duration-300"
            href={repo.html_url}
            target="_blank"
          >
            Repo <GoMarkGithub />
          </a>
          <a
            className="bg-[#222222] w-fit py-1 px-2 rounded flex items-center gap-2 self-end hover:bg-[#174D4C] transition-colors duration-300"
            href={repo.homepage}
            target="_blank"
          >
            App <GoRocket />
          </a>
        </div>
      </div>
    </li>
  );
};
