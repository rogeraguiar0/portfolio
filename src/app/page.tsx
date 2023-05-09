"use client";

import { iRepo } from "@/@types";
import { gitHubApi } from "@/api/gitHub.api";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Repo } from "@/components/repo";
import { Tech } from "@/components/tech";
import { frontend, backend, dev } from "@/stacks";
import { useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

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

      <main className="h-full bg-zinc-800">
        <section
          className="w-full max-w-[1200px] my-0 mx-auto mt-20 text-zinc-50 flex flex-col justify-center gap-8 p-2 md:justify-evenly"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div>
            <h2 className="text-2xl mb-2 md:text-4xl">
              Desenvolvedor Full Stack
            </h2>

            <p className="text-zinc-400 md:text-xl">
              Sistemas da Informação - Anhanguera
            </p>

            <p className="text-zinc-400 md:text-xl">Kenzie Academy Brasil</p>
          </div>

          <p className="md:text-xl md:leading-9 md:font-light">
            Minha conexão com a tecnologia começou desde a infância, sempre
            gostei de mexer em computadores e eventualmente virou a minha
            paixão. Sempre estou em busca de novos desafios, tenho experiência
            em desenvolvimento com React.js, trabalho em equipe e vivência com
            metodologias ágeis. Tenho como objetivos adquirir novas experiências
            e colocar em prática os meus conhecimentos.
          </p>
        </section>

        <section className="w-full max-w-[1200px] my-0 mx-auto text-zinc-50 flex flex-col p-2 min-h-screen">
          <h2 className="text-2xl mb-4 md:text-4xl md:mb-8 md:text-center">
            Minhas tecnologias
          </h2>

          <h3 className="text-zinc-400 text-xl mb-2 md:text-2xl">Front End:</h3>
          <ul className="flex flex-wrap w-full mb-4">
            {frontend.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>

          <h3 className="text-zinc-400 text-xl mb-2 md:text-2xl">Back End:</h3>
          <ul className="flex flex-wrap w-full mb-4">
            {backend.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>

          <h3 className="text-zinc-400 text-xl mb-2 md:text-2xl">Dev:</h3>
          <ul className="flex flex-wrap w-full">
            {dev.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>
        </section>

        <section className="w-full max-w-[1200px] my-0 mx-auto text-zinc-50 flex flex-col p-2">
          <h2 className="text-2xl mb-4 md:text-4xl md:my-12 md:text-center">
            Meus projetos
          </h2>

          <div className="flex flex-col gap-8 justify-between md:flex-row">
            <div className="w-full max-w-xs p-4 bg-zinc-900 h-fit rounded md:sticky md:top-24">
              <h3 className="text-xl font-semibold mb-2 flex justify-between items-center md:text-2xl">
                Repositórios{" "}
                <FaGithubSquare className="text-2xl" color="white" />
              </h3>

              <p>
                Os repositórios foram obtidos através da API do GitHub, para
                mais detalhes segue o link da documentação:{" "}
                <a
                  href="https://docs.github.com/pt/rest?apiVersion=2022-11-28"
                  target="_blank"
                  className="underline"
                >
                  GitHub API - Doc
                </a>
              </p>
            </div>

            <ul className="flex flex-col gap-4 max-w-lg">
              {repos?.map((repo, i) => (
                <Repo key={i} repo={repo} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
