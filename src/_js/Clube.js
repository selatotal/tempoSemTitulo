Clube = function(identificador, clube) {
	
	this.identificador = identificador;

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

	this.formataData = function() {
		var data = this.dataDate();
		var retorno = ""
		if (data.getDate() < 10){
			retorno += "0";
		}
		retorno += data.getDate();
		retorno += "/";
		if (data.getMonth()+1 < 10){
			retorno += "0";
		}
		retorno += data.getMonth()+1;
		retorno += "/";
		retorno += data.getFullYear();
		return retorno;
	}

	this.tempoSemTitulo = getNiceTime(this.dataDate());

	this.dataFormatada = this.formataData();
}