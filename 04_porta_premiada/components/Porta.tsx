import PortaModel from '@/model/porta-model';
import styles from '../styles/Porta.module.css';
import { FormEvent } from 'react';

interface PortaProps {
	value: PortaModel,
	onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: Readonly<PortaProps>) {
	const porta = props.value;
	const selecionada = porta.selecionada && !porta.aberta;

	function alternarSelecao(e: FormEvent) {
		props.onChange(porta.alternarSelecao());
	}

	function abrir(e: FormEvent) {
		e.stopPropagation();
		props.onChange(porta.abrir());
	}

	function renderizarPorta() {
		return (
			<div className={styles.porta}>
				<div className={styles.numero}>{porta.numero}</div>
				<div className={styles.macaneta} onClick={abrir}></div>
			</div>
		)
	}

	return (
		<div className={styles.area} onClick={alternarSelecao}>
			<div className={`${styles.estrutura} ${selecionada ? styles.selecionada : ''}`}>
				{porta.aberta ? false : renderizarPorta()}
			</div>
			<div className={styles.chao}></div>
		</div>
	)
}