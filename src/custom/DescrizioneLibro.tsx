// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("DescrizioneLibro");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("DescrizioneLibro");
import { type CellProps } from "../floware";

export default function DescrizioneLibro({ value }: CellProps) {__mk();
  return <em className="text-(--mk-text)">{value}</em>;
}
