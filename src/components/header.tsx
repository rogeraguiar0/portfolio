"use client";

import { useEffect, useState } from "react";
import { NavLink } from "./navLink";
import { gitHubApi } from "@/api/gitHub.api";
import { iUser } from "@/@types";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";
import { GoKebabVertical } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({} as iUser);

  useEffect(() => {
    const fetchData = async () => {
      await gitHubApi
        .get("/users/rogeraguiar0")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <header className="w-full h-20 fixed top-0 left-0 border-b border-zinc-600 bg-zinc-800 backdrop-blur-md">
      <div className="w-full max-w-[1200px] h-full px-4 my-0 mx-auto relative flex justify-between items-center md:px-0">
        <div className="flex items-center gap-4">
          {user.avatar_url ? (
            <>
              <Image
                src={user.avatar_url}
                width={56}
                height={56}
                alt="Github user image"
                className="rounded-full"
              />
              <h1 className="text-zinc-50 text-lg">{user?.name}</h1>
            </>
          ) : (
            <>
              <AiOutlineLoading color="white" className="animate-spin" />
              <p className="text-zinc-50">Loading...</p>
            </>
          )}
        </div>

        <button className="lg:hidden block" onClick={() => setOpen(!open)}>
          {open ? <CgClose color="white" /> : <GoKebabVertical color="white" />}
        </button>

        {open && (
          <nav className="flex flex-col gap-4 w-full p-4 absolute top-20 left-0 bg-zinc-800 backdrop-blur-md lg:hidden">
            <NavLink href="https://api.whatsapp.com/send?phone=+5531999054405&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os">
              <BsWhatsapp color="white" size={16} />
              Whatsapp
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/rogeraguiar0/">
              <BsLinkedin color="white" size={16} />
              LinkedIn
            </NavLink>
            <NavLink href="https://github.com/rogeraguiar0">
              <BsGithub color="white" size={16} />
              Github
            </NavLink>
          </nav>
        )}

        <nav className="hidden lg:flex gap-4">
          <NavLink href="https://api.whatsapp.com/send?phone=+5531999054405&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os">
            Whatsapp
          </NavLink>
          <NavLink href="https://github.com/rogeraguiar0">Github</NavLink>
          <NavLink href="https://www.linkedin.com/in/rogeraguiar0/">
            LinkedIn
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
