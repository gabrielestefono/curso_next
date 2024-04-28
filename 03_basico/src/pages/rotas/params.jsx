import { useRouter } from "next/router";
import Link from "next/link";

export default function Params(){
	const router = useRouter();

	const nome = router.query.nome;
	const id = router.query.id;
	return (
		<div>
			<h1>Rotas / Params:</h1>
			<p>Nome: {nome}</p>
			<p>Id: {id}</p>
			<Link href="/rotas">
				<button>Voltar</button>
			</Link>
		</div>
	)
}