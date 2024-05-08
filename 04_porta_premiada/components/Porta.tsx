import styles from '../styles/Porta.module.css';

export default function Porta({selecionada}: Readonly<{selecionada: boolean}>){
	return(
		<div className={styles.area}>
			<div className={`${styles.estrutura} ${selecionada ? styles.selecionada : ''}`}>
				<div className={styles.porta}>
					<div className={styles.numero}>3</div>
					<div className={styles.macaneta}></div>
				</div>
			</div>
			<div className={styles.chao}></div>
		</div>
	)
}