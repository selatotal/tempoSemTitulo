diffDate = function (startDate, endDate){
    var years = endDate.getFullYear() - startDate.getFullYear();
    var months = endDate.getMonth() - startDate.getMonth();

    if (months < 0){
        years -= 1;
        months = 12 + months;
    } 

    if (startDate.getDate() > endDate.getDate()){
        var lastDayOfMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0, 23, 59, 59).getDate();
        var days = lastDayOfMonth - startDate.getDate() + endDate.getDate();
        if (months > 0){
            months -= 1;
        }
    } else {
        var days = endDate.getDate() - startDate.getDate();
    }

    return {
        years : years,
        months : months,
        days : days
    };
};

getNiceTime = function(date1, date2){

    if (!date2){
        var date2 = new Date();
        date2 = new Date(date2.getTime() + date2.getTimezoneOffset()*60*1000);
    }
    
    console.log("1 - " + date1);
    console.log("2 - " + date2);

    var diff = diffDate(date1, date2);
    var anos = meses = dias = "";

    if (diff['years'] > 1){
        anos = diff['years'] + " anos";
    } else if (diff['years'] == 1) {
        anos = diff['years'] + " ano"
    }
    if (diff['months'] > 1){
        meses = diff['months'] + " meses";
    } else if (diff['months'] == 1) {
        meses = diff['months'] + " mês"
    }
    if (diff['days'] > 1){
        dias = diff['days'] + " dias";
    } else if (diff['days'] == 1){
        dias = diff['days'] + " dia";
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