import { useEffect, useState } from "react";

export default function Form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    mostrarUsuarios();
  }, []);

	async function mostrarUsuarios(){
		await fetch("http://localhost:3000/api/form")
      .then((response) => response.json())
      .then(dados => setUsuarios(dados));
	}

  async function salvarUsuario() {
    await fetch("http://localhost:3000/api/form", {
      method: "POST",
			headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome: nome, idade: idade}),
    });

    await fetch("http://localhost:3000/api/form")
      .then((response) => response.json())
      .then(dados => setUsuarios(dados));
  }
  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <button onClick={salvarUsuario}>Enviar</button>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index * 100}>
            Usuário: {usuario?.nome} idade: {usuario?.idade}
          </li>
        ))}
      </ul>
    </div>
  );
}
