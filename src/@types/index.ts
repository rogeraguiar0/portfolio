import { IconType } from "react-icons";

export interface iUser {
  name: string;
  avatar_url: string;
}

export interface iStack {
  name: string;
  icon: IconType;
}

export interface iRepo {
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage?: string;
}
