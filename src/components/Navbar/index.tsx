import { useState } from "react";
import useMedia from "use-media";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = "Róger Aguiar";

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={`https://github.com/rogeraguiar0.png`}
              alt="Róger Aguiar"
              title="Róger Aguiar"
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>Róger Aguiar</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button
        type="primary"
        as="a"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=+5531999054405&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
      >
        Whatsapp
      </Button>

      <Button
        type="icon"
        target="_blank"
        as="a"
        aria-label="Github"
        href={`https://github.com/rogeraguiar0`}
      >
        <FaGithub />
      </Button>

      <Button
        type="icon"
        target="_blank"
        as="a"
        aria-label="LinkedIn"
        href={`https://www.linkedin.com/in/rogeraguiar0`}
      >
        <FaLinkedinIn />
      </Button>
    </NavbarLinks>
  );
};
