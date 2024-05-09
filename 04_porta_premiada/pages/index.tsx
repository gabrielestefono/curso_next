import Porta from "@/components/Porta";
import { criarPortas, atualizarPortas } from "@/functions/portas";
import { useState } from "react";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 1));

  function renderizarPortas() { 
    return portas.map((porta) => 
      <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  ) }

  return (
    <div style={{ display: "flex", flexShrink: "0", flexWrap: "wrap"}}>
      {renderizarPortas()}
    </div>
  );
}
