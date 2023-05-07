import { iStack } from "@/@types";

interface iTechProps {
  stack: iStack;
}

export const Tech = ({ stack }: iTechProps) => {
  return (
    <li className="w-1/3 flex flex-col items-center gap-2 mt-2 md:w-1/5">
      <stack.icon className="text-4xl" />
      <h4 className="text-xs text-center">{stack.name}</h4>
    </li>
  );
};
