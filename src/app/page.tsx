"use client";

import { iRepo } from "@/@types";
import { gitHubApi } from "@/api/gitHub.api";
import { Header } from "@/components/header";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { frontend, backend, dev } from "@/stacks";
import { Tech } from "@/components/tech";
import { FaGithubSquare } from "react-icons/fa";
import { Repo } from "@/components/repo";
import { Footer } from "@/components/footer";
import { Background } from "@/components/background";
import { useEffect, useState } from "react";

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await gitHubApi
        .get("/users/rogeraguiar0/repos")
        .then((res) =>
          setRepos(
            res.data.filter(
              (elt: iRepo) =>
                elt.name !== "portfolio" && elt.name !== "rogeraguiar0"
            )
          )
        )
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <main className="h-full bg-transparent">
        <section
          className="w-full max-w-[1200px] my-0 mx-auto mt-20 flex flex-col gap-4 p-2 md:justify-evenly"
          style={{
            minHeight: "calc(100vh - 5rem)",
          }}
        >
          <div className="w-full h-fit flex flex-col justify-between gap-2 md:flex-row">
            <div className="flex flex-col bg-[#2222227f] w-full p-2 rounded backdrop-blur-sm md:p-4 md:w-fit md:justify-between">
              <h2 className="text-[#71F3E7] text-xl font-semibold mb-4 md:text-4xl">
                Desenvolvedor Full Stack
              </h2>

              <p className="text-[#B1CECD] md:text-xl">
                Sistemas da Informação - Anhanguera
              </p>

              <p className="text-[#B1CECD] md:text-xl">Kenzie Academy Brasil</p>
            </div>

            <div className="bg-[#2222227f] w-full p-2 rounded backdrop-blur-sm md:p-4 md:w-[320px]">
              <h3 className="text-[#71F3E7] text-lg font-semibold md:text-2xl">
                Portfólio feito com:
              </h3>

              <ul className="flex items-center justify-around text-[#B1CECD]">
                <Tech
                  stack={{
                    name: "Next.js",
                    icon: SiNextdotjs,
                  }}
                />
                <Tech
                  stack={{
                    name: "Tailwindcss",
                    icon: SiTailwindcss,
                  }}
                />
              </ul>
            </div>
          </div>

          <p className="bg-[#2222227f] w-fit p-2 rounded backdrop-blur-sm text-[#B1CECD] md:text-xl md:leading-9 md:p-4">
            Minha conexão com a tecnologia começou desde a infância, sempre
            gostei de mexer em computadores e eventualmente virou a minha
            paixão. Sempre estou em busca de novos desafios, tenho experiência
            em desenvolvimento com React.js, trabalho em equipe e vivência com
            metodologias ágeis. Tenho como objetivos adquirir novas experiências
            e colocar em prática os meus conhecimentos.
          </p>
        </section>

        <section className="w-full max-w-[1200px] my-0 mx-auto text-zinc-50 flex flex-col gap-4 p-2">
          <h2 className="bg-[#2222227f] font-semibold p-2 rounded backdrop-blur-sm text-[#71F3E7] text-2xl mb-4 md:text-4xl md:mb-8 text-center">
            Stacks
          </h2>

          <div className="bg-[#2222227f] text-[#001F26] w-full rounded backdrop-blur-sm flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-center mb-2 md:text-2xl bg-[#B1CECD] p-1 rounded-tl-sm rounded-tr-sm">
              Front End:
            </h3>
            <ul className="flex flex-wrap w-full mb-4 p-2">
              {frontend.map((stack, i) => (
                <Tech key={i} stack={stack} />
              ))}
            </ul>
          </div>

          <div className="bg-[#2222227f] text-[#001F26] w-full rounded backdrop-blur-sm flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-center mb-2 md:text-2xl bg-[#B1CECD] p-1 rounded-tl-sm rounded-tr-sm">
              Back End:
            </h3>
            <ul className="flex flex-wrap w-full mb-4 p-2">
              {backend.map((stack, i) => (
                <Tech key={i} stack={stack} />
              ))}
            </ul>
          </div>

          <div className="bg-[#2222227f] text-[#001F26] w-full rounded backdrop-blur-sm flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-center mb-2 md:text-2xl bg-[#B1CECD] p-1 rounded-tl-sm rounded-tr-sm">
              Dev:
            </h3>
            <ul className="flex flex-wrap w-full mb-4 p-2">
              {dev.map((stack, i) => (
                <Tech key={i} stack={stack} />
              ))}
            </ul>
          </div>
        </section>

        <section className="w-full max-w-[1200px] my-0 mx-auto text-[#B1CECD] flex flex-col gap-4 p-2">
          <h2 className="bg-[#2222227f] font-semibold p-2 rounded backdrop-blur-sm text-[#71F3E7] text-2xl my-4 md:text-4xl md:mb-8 text-center">
            Meus projetos
          </h2>

          <div className="flex flex-col gap-8 justify-between md:flex-row">
            <div className="w-full max-w-xs p-4 bg-[#222222] h-fit rounded md:sticky md:top-24">
              <h3 className="text-xl font-semibold mb-2 flex justify-between items-center md:text-2xl">
                Repositórios{" "}
                <FaGithubSquare className="text-2xl" color="#B1CECD" />
              </h3>

              <p>
                Os repositórios foram obtidos através da API do GitHub, para
                mais detalhes segue o link da documentação:
                <br />
                <a
                  href="https://docs.github.com/pt/rest?apiVersion=2022-11-28"
                  target="_blank"
                  className="underline"
                >
                  GitHub API - Doc
                </a>
              </p>
            </div>

            <ul className="flex flex-col gap-4 max-w-lg mb-8">
              {repos?.map((repo, i) => (
                <Repo key={i} repo={repo} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      <Background />
    </>
  );
}
