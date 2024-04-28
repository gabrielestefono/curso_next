import Link from "next/link";
import { useRouter } from "next/router"

export default function Buscar(){
	const router = useRouter();
	const codigo = router.query.codigo;
	return (
		<>
			<div>
				<h1>Rotas / {codigo} / Buscar</h1>
			</div>
			<Link href="/rotas">
				<button>Voltar</button>
			</Link>
		</>
	)
}