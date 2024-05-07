const usuarios = [];

export default function form(req, res){
	if(req.method === "POST"){
		res.status(200).json(insert(req, res));
	}else if(req.method === "GET"){
		res.status(200).json(getAll());
	}else{
		res.status(405).send();
	}
}

function insert(req, res){
	console.log(req.body);
	const {nome, idade} = req.body;
	usuarios.push({nome, idade})
	return {nome, idade};
}

function getAll(req, res){
	return usuarios;
}