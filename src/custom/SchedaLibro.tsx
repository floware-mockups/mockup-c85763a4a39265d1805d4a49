// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("SchedaLibro");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("SchedaLibro");
import { Button, Drawer, Field, useTable, type DetailProps } from "../floware";

export default function SchedaLibro({ pageId, rowIndex, close }: DetailProps) {__mk();
  const table = useTable(pageId);
  const row = table?.rows[rowIndex];
  if (!table || !row) return null;
  const titolo = table.column("Titolo");
  const descrizione = table.column("Descrizione");
  const altre = table.columns.filter((nome) => (__mk(), nome !== "Titolo" && nome !== "Descrizione"));
  return (
    <Drawer title="Scheda del libro" onClose={close} footer={<Button onClick={close}>Chiudi</Button>}>
      <div className="space-y-4">
        {titolo >= 0 && <Field label="Titolo"><strong className="text-lg" style={{ color: "var(--mk-primary)" }}>{row[titolo]}</strong></Field>}
        {altre.map((nome) => {__mk();
          const valore = table.value(row, nome);
          if (nome === "Autore") {
            const parti = valore.trim().split(" ").filter((parte) => (__mk(), parte !== ""));
            const autore = parti.map((parte, indice) => (__mk(), indice === parti.length - 1 ? parte.toLocaleUpperCase("it-IT") : parte)).join(" ");
            return <Field key={nome} label={nome}><strong className="font-serif not-italic">{autore || valore}</strong></Field>;
          }
          return <Field key={nome} label={nome}>{valore}</Field>;
        })}
        {descrizione >= 0 && <Field label="Descrizione"><em className="whitespace-pre-wrap text-(--mk-text)">{row[descrizione]}</em></Field>}
      </div>
    </Drawer>
  );
}
