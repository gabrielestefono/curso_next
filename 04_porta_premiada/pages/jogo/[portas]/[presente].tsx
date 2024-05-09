import Porta from "@/components/Porta";
import styles from '../../../styles/jogo.module.css';
import { criarPortas, atualizarPortas } from "@/functions/portas";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PortaModel from "@/model/porta-model";

export default function Jogo(){
	const router = useRouter();
	
	const [portas, setPortas] = useState<PortaModel[]>([]);

	useEffect(()=>{
		const portas: number = +router.query.portas!;
		const presente: number = +router.query.presente!;
		setPortas(criarPortas(portas, presente));
	},[router.query])

  function renderizarPortas() { 
    return portas.map((porta) => 
      <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  ) }
	return(
		<div className={styles.jogo}>
			<div className={styles.portas}>
      	{renderizarPortas()}
			</div>
			<div className={styles.botoes}>
				<Link href="/">
					<button>Reiniciar o Jogo</button>
				</Link>
			</div>
    </div>
	)
}