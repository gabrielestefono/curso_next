export default class Porta{
	private _numero: number;
	private _temPresente: boolean;
	private _selecionada: boolean;
	private _aberta: boolean;

	constructor(numero: number, temPresente: boolean = false, selecionada: boolean = false, aberta: boolean = false){
		this._numero = numero;
		this._temPresente = temPresente;
		this._selecionada = selecionada;
		this._aberta = aberta;
	}

	get numero(){
		return this._numero;
	}

	get temPresente(){
		return this._temPresente;
	}

	get selecionada(){
		return this._selecionada;
	}

	get aberta(){
		return this._aberta;
	}

	desselecionar(){
		const selecionada = false;
		return new Porta(this.numero, this.temPresente, selecionada, this.aberta);
	}

	alternarSelecao(){
		const selecionada = !this.selecionada;
		return new Porta(this.numero, this.temPresente, selecionada, this.aberta);
	}

	abrir(){
		const aberta = true;
		return new Porta(this.numero, this.temPresente, this.selecionada, aberta);
	}
}