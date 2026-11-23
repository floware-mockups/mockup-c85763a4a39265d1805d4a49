// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("TitoloLibro");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("TitoloLibro");
import { type CellProps } from "../floware";

export default function TitoloLibro({ value }: CellProps) {__mk();
  return <strong style={{ color: "var(--mk-primary)" }}>{value}</strong>;
}
