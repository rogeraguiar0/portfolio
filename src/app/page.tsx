"use client";

import { iRepo } from "@/@types";
import { gitHubApi } from "@/api/gitHub.api";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Repo } from "@/components/repo";
import { Tech } from "@/components/tech";
import { frontend, backend, dev } from "@/stacks";
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

      <main className="h-full bg-zinc-50">
        <section
          className="bg-zinc-800 mt-20 text-zinc-50 flex flex-col justify-center gap-8 p-2"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div>
            <h2 className="text-2xl mb-2">Desenvolvedor Full Stack</h2>
            <p className="text-zinc-400">Sistemas da Informação - Anhanguera</p>
            <p className="text-zinc-400">Kenzie Academy Brasil</p>
          </div>
          <p className="">
            Minha conexão com a tecnologia começou desde a infância, sempre
            gostei de mexer em computadores e eventualmente virou a minha
            paixão. Sempre estou em busca de novos desafios, tenho experiência
            em desenvolvimento com React.js, trabalho em equipe e vivência com
            metodologias ágeis. Tenho como objetivos adquirir novas experiências
            e colocar em prática os meus conhecimentos.
          </p>
        </section>

        <section className="bg-zinc-800 text-zinc-50 flex flex-col p-2">
          <h2 className="text-2xl mb-4">Minhas tecnologias</h2>

          <h3 className="text-zinc-400 text-xl mb-2">Front End:</h3>
          <ul className="flex flex-wrap w-full mb-4">
            {frontend.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>

          <h3 className="text-zinc-400 text-xl mb-2">Back End:</h3>
          <ul className="flex flex-wrap w-full mb-4">
            {backend.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>

          <h3 className="text-zinc-400 text-xl mb-2">Dev:</h3>
          <ul className="flex flex-wrap w-full">
            {dev.map((stack, i) => (
              <Tech key={i} stack={stack} />
            ))}
          </ul>
        </section>

        <section className="bg-zinc-800 text-zinc-50 flex flex-col p-2">
          <h2 className="text-2xl mb-4">Meus projetos</h2>

          <ul className="flex flex-col gap-4">
            {repos?.map((repo, i) => (
              <Repo key={i} repo={repo} />
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
