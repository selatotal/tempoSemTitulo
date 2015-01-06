getNiceTime = function(date1, date2){
    if (date2 == null){
        date2 = new Date();
    }

    var diff = new Date(date2 - date1);
    console.log(diff);
    console.log(date2);
    console.log(date1);
    var years = diff.toISOString().slice(0,4) - 1970;
    var months = diff.getMonth();
    var days = diff.getDate();

    anos = meses = dias = false;

    if (years > 1){
        anos = years + " anos";
    } else if (years == 1) {
        anos = years + " ano"
    }
    if (months > 1){
        meses = months + " meses";
    } else if (meses == 1) {
        meses = meses + " mês"
    }
    if (days > 1){
        dias = days + " dias";
    } else if (days == 1){
        dias = days + " dia";
    }

    retorno = "";

    if (anos){
        retorno += anos;
    }
    if (meses) {
        if (anos && dias){
            retorno += ", " + meses
        } else if (anos){
            retorno += " e " + meses
        } else {
            retorno += meses
        }
    }
    if (dias) {
        if (anos || meses){
            retorno += " e " + dias
        } else {
            retorno += dias
        }
    }

    return retorno;

}