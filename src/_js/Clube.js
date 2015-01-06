Clube = function(clube) {
	
	this.nome = clube['nome'];
	
	this.titulo = clube['titulo'];
	
	this.data = clube['data'];

	this.dataDate = function(){
		return new moment(this.data, 'YYYY-MM-DD');
	}

	Clube.sortByDate = function(a, b) {
		return a.dataDate() - b.dataDate();
	}
}