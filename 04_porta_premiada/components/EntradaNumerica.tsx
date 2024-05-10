import styles from '../styles/EntradaNumerica.module.css';

interface EntradaNumericaProps{
	texto: string,
	value: number,
	onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps){
	function decremento(){
		props.onChange(props.value - 1)
	}

	function incremento(){
		props.onChange(props.value + 1)
	}

	return (
		<div className={styles.entradaNumerica}>
			<span className={styles.texto}>{props.texto}</span>
			<span className={styles.value}>{props.value}</span>
			<div className={styles.botao}>
				<button className={styles.btn} onClick={decremento}>-</button>
				<button className={styles.btn} onClick={incremento}>+</button>
			</div>
		</div>
	)
}