import PortaModel from "@/model/porta-model";

export function criarPortas(quantidade: number, comPresente: number): PortaModel[]
{
	return Array.from({length: quantidade}, (_, i) => {
		const numero = i +1;
		const temPresente = numero === comPresente;
		return new PortaModel(numero, temPresente);
	});
}

export function atualizarPortas(portas: PortaModel[], modificada: PortaModel): PortaModel[]
{
	return portas.map(portaAtual => {
		const igualModificada = portaAtual.numero === modificada.numero;
		if(igualModificada){
			return modificada;
		}else{
			return modificada.aberta ? portaAtual : portaAtual.desselecionar();
		}
	})
}