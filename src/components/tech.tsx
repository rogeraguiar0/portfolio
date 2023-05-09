import { iStack } from "@/@types";

interface iTechProps {
  stack: iStack;
}

export const Tech = ({ stack }: iTechProps) => {
  return (
    <li className="w-1/3 flex flex-col items-center gap-2 mt-2 md:mt-8">
      <stack.icon className="text-4xl md:text-[6rem]" />
      <h4 className="text-xs text-center cursor-default md:text-base">
        {stack.name}
      </h4>
    </li>
  );
};
