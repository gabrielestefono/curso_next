import Porta from "@/components/Porta";
import styles from '../styles/jogo.module.css';
import { criarPortas, atualizarPortas } from "@/functions/portas";
import { useState } from "react";

export default function Jogo(){
	const [portas, setPortas] = useState(criarPortas(3, 1));

  function renderizarPortas() { 
    return portas.map((porta) => 
      <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  ) }
	return(
		<div className={styles.jogo}>
			<div className={styles.portas}>
      	{renderizarPortas()}
			</div>
			<div className={styles.botoes}></div>
    </div>
	)
}