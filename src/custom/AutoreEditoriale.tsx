// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("AutoreEditoriale");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("AutoreEditoriale");
import { type CellProps } from "../floware";

export default function AutoreEditoriale({ value }: CellProps) {__mk();
  const parti = value.trim().split(" ").filter((parte) => (__mk(), parte !== ""));
  const autore = parti.map((parte, indice) => (__mk(), indice === parti.length - 1 ? parte.toLocaleUpperCase("it-IT") : parte)).join(" ");
  return (
    <strong className="font-serif text-sm font-bold not-italic leading-relaxed text-(--mk-text)">
      {autore || value}
    </strong>
  );
}
