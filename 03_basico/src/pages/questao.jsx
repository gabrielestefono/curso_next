import React, { useEffect, useState } from "react";

export default function Questao(){
	const [pergunta, setPergunta] = useState(null);

	useEffect(()=>{
		fetch("http://localhost:3000/api/questao/1000")
			.then(response => response.json())
			.then(data => {
				if(data){
					console.log(data);
					setPergunta(data);
				}
			})
			.catch(error => {
				if(error){
					console.log(error);
				}
			})
	}, [setPergunta]);

	function renderizarRespostas(){
		if(pergunta){
			return pergunta.respostas.map((resposta, index) => <li key={index * 1000}>{resposta}</li>);
		}
		return false;
	}

	return (
		<div>
			<h1>Questão: {pergunta?.id}</h1>
			<div>
				<span>{pergunta?.enunciado}</span>
				<ul>
					{renderizarRespostas()}
				</ul>
			</div>
		</div>
	)
}