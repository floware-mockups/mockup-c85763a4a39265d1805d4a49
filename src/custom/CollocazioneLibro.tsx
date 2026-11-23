// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("CollocazioneLibro");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("CollocazioneLibro");
import { type CellProps } from "../floware";

export default function CollocazioneLibro({ value }: CellProps) {__mk();
  const separatore = value.indexOf(" · ");
  if (separatore >= 0) {
    const data = value.slice(0, separatore);
    const collocazione = value.slice(separatore + 3);
    return <span><span>{data}{" · "}</span><strong className="font-bold text-(--mk-text)">{collocazione.toLocaleUpperCase("it-IT")}</strong></span>;
  }
  const testo = value.trim();
  const soloData = testo.length === 10 && ((testo[2] === "/" && testo[5] === "/") || (testo[4] === "-" && testo[7] === "-"));
  if (soloData || !testo) return <span>{value}</span>;
  return <strong className="font-bold text-(--mk-text)">{value.toLocaleUpperCase("it-IT")}</strong>;
}
