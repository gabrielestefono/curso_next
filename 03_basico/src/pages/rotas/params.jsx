import { useRouter } from "next/router"

export default function Params(){
	const router = useRouter();

	const nome = router.query.nome;
	const id = router.query.id;
	return (
		<div>
			<h1>Rotas / Params:</h1>
			<p>Nome: {nome}</p>
			<p>Id: {id}</p>
		</div>
	)
}