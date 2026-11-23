// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("AutoreEditoriale");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("AutoreEditoriale");
import { type CellProps } from "../floware";

export default function AutoreEditoriale({ value }: CellProps) {__mk();
  return (
    <span className="inline-block max-w-full rounded px-2 py-1 font-serif text-sm font-medium italic leading-relaxed bg-(--mk-subtle) text-(--mk-text) border-l-2 border-(--mk-border)" style={{ color: "var(--mk-primary)" }}>
      {value}
    </span>
  );
}
