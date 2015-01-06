
// Cria lista de Clubes
listaClubes = function(titulosClubes){

	var lista = [];
	for (clube in titulosClubes){
		lista.push(new Clube(titulosClubes[clube]));
	}
	return lista;

}

// Monta HTML com a lista de Clubes
montaTabela = function(listaClubes){
	var strTabela = "<table border='1'>\n";
	for (clube in listaClubes) {
		strTabela += "<tr><td>";
		strTabela += listaClubes[clube]['nome'];
		strTabela += "</td><td>";
		strTabela += listaClubes[clube]['titulo'];
		strTabela += "</td><td>";
		strTabela += listaClubes[clube]['data'];
		strTabela += "</td><td>";
		strTabela += moment(listaClubes[clube]['data']).fromNow(true);
//		strTabela += getNiceTime(listaClubes[clube].dataDate());
		strTabela += "</td></tr>\n";
	}
	strTabela += "</table>";

	posTabela = document.getElementById('tabelaClubes');
	posTabela.innerHTML = strTabela;

}

// Principal
lista = listaClubes(titulosClubes);
lista.sort(Clube.sortByDate);

