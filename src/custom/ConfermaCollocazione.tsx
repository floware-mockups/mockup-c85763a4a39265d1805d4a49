// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("ConfermaCollocazione");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("ConfermaCollocazione");
import { useState } from "react";
import { Button, Dialog, Select, useTable, usePrototype, type ConfirmProps } from "../floware";

export default function ConfermaCollocazione({ action, confirm, cancel }: ConfirmProps) {__mk();
  const [collocazione, setCollocazione] = useState("A per armadio");
  const [salvato, setSalvato] = useState(false);
  const ingresso = useTable(action.pageId);
  const catalogo = useTable("catalogo-libri");
  const { notify } = usePrototype();
  const disponibile = Boolean(ingresso && catalogo && catalogo.column("Ingresso / Collocazione") >= 0);

  function salva() {__mk();
    if (!ingresso || !catalogo || !disponibile || salvato) return;
    const dati: Record<string, string> = {};
    for (const nome of catalogo.columns) {__mk();
      if (nome === "Ingresso / Collocazione") {
        const indiceData = ingresso.column("Ingresso");
        const data = indiceData >= 0 ? action.row[indiceData] || "" : "";
        dati[nome] = data ? data + " · " + collocazione : collocazione;
      } else {
        const indice = ingresso.column(nome);
        dati[nome] = indice >= 0 ? action.row[indice] || "" : "";
      }
    }
    setSalvato(true);
    catalogo.addRow(dati);
    notify("Libro aggiunto al catalogo con la collocazione scelta.");
    confirm();
  }

  return (
    <Dialog title="Completa la registrazione" onClose={cancel} footer={<><Button variant="secondary" onClick={cancel}>Annulla</Button><Button onClick={salva} disabled={!disponibile || salvato}>Registra nel catalogo</Button></>}>
      <div className="space-y-4">
        <p className="text-(--mk-muted)">Scegli la collocazione del libro. Nel catalogo sarà mostrata insieme alla data di ingresso.</p>
        <Select label="Collocazione" value={collocazione} options={["A per armadio", "B per mensola"]} onChange={setCollocazione} />
        {!disponibile && <p className="text-(--mk-danger)">Catalogo o colonna di destinazione non disponibili.</p>}
      </div>
    </Dialog>
  );
}
