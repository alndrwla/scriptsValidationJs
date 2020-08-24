let ci = document.getElementById("ci");

ci.addEventListener('change',ciVal);

function ciVal(){
    
    let ci = document.getElementById("ci").value;
    let ciId, suma = 0, aux = 0, resta = 0;
    if(ci.length == 10){
        for (let i = 0; i < ci.length-1; i++) {
            ciId = parseInt(ci[i]);
            if(i%2 == 0){
                ciId *=2;
                if(ciId > 9){
                    ciId-=9;
                }
            }
            suma += ciId;
        }

        if(suma%10 != 0){
            aux = (parseInt(suma/10)+1)*10;
            resta = aux - suma;
        }

        ultimo = parseInt(ci[9]);
        if(resta == ultimo){
            document.getElementById('ciFalse').style.display = 'none';
            document.getElementById('ciTrue').style.display = 'inline';
        }else{
            document.getElementById('ciFalse').style.display = 'inline';
            document.getElementById('ciTrue').style.display = 'none';
            return;
        }
    }else{
        document.getElementById('ciFalse').style.display = 'inline';
        document.getElementById('ciTrue').style.display = 'none';
        return;
    }
}