import PortaModel from '@/model/porta-model';
import styles from '../styles/Porta.module.css';
import { FormEvent } from 'react';

interface PortaProps{
	value: PortaModel,
	onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: Readonly<PortaProps>){
	const porta = props.value;
	const selecionada = porta.selecionada;

	function alternarSelecao(e: FormEvent){
		props.onChange(porta.alternarSelecao());
	}

	return(
		<button className={styles.area} onClick={alternarSelecao}>
			<div className={`${styles.estrutura} ${selecionada ? styles.selecionada : ''}`}>
				<div className={styles.porta}>
					<div className={styles.numero}>{porta.numero}</div>
					<div className={styles.macaneta}></div>
				</div>
			</div>
			<div className={styles.chao}></div>
		</button>
	)
}