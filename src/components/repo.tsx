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
    <li className="w-full flex flex-col gap-2 bg-zinc-700 rounded p-2">
      <h3 className="text-lg font-semibold">{repo.name}</h3>

      <p>{repo.description ? handleDescription() : "..."}</p>

      <div className="flex justify-between">
        <span className={`bg-zinc-600 rounded ${repo.language && "px-2 py-1"}`}>
          {repo.language}
        </span>

        <div className="flex gap-2">
          <a
            className="bg-zinc-900 w-fit py-1 px-2 rounded flex items-center gap-2 self-end"
            href={repo.html_url}
            target="_blank"
          >
            Repo <GoMarkGithub />
          </a>
          <a
            className="bg-zinc-900 w-fit py-1 px-2 rounded flex items-center gap-2 self-end"
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
