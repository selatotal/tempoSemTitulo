Clube = function(clube) {
	
	this.nome = clube['nome'];
	
	this.titulo = clube['titulo'];
	
	this.data = clube['data'];

	this.dataDate = function(){
		var data = new Date(this.data);
		return new Date(data.getTime() + data.getTimezoneOffset()*60*1000);
	}

	Clube.sortByDate = function(a, b) {
		return a.dataDate() - b.dataDate();
	}
}