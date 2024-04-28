import Link from "next/link";
import { useRouter } from "next/router";

export default function Nome(){
	const router = useRouter();
	const codigo = router.query.codigo;
	const nome = router.query.nome;
	return (
		<>
			<div>
				<h1>Rotas / {codigo} / {nome} </h1>
			</div>
			<Link href="/rotas">
				<button>Voltar</button>
			</Link>
		</>
	)
}