import Cartao from "@/components/Cartao";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(3);
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica value={qtdePortas} onChange={novaQuantidade => setQtdePortas(novaQuantidade)} texto="Quantidade de Portas?"/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica value={comPresente} onChange={novaQuantidade => setComPresente(novaQuantidade)} texto="Porta com Presente?"/>
        </Cartao>
        <Cartao bgcolor="#28A085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} style={{flex: "1", margin: "0"}} passHref>
            <h2 className={styles.link}> Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
