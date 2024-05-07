export default (req, res) => {
	if(req.method === "GET"){
		res.status(200).json({nome: "Gabriel"});
	}else{
		res.status(404).json({mensagem: "Erro ao executar"});
	}
}