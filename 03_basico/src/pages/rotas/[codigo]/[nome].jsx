import { useRouter } from "next/router"

export default function Nome(){
	const router = useRouter();
	const codigo = router.query.codigo;
	const nome = router.query.nome;
	const id = router.query.id;
	return (
		<div>
			<h1>Rotas / {codigo} / {nome} </h1>
		</div>
	)
}