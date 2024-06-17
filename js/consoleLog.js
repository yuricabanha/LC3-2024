function compare(x) {
    if (x == '') {
        alert('O campo está vazio');
        return false;
    }
    if (x < 5) {
        if (x<0){
            document.getElementById('comp').innerHTML = (x+" Menor que cinco e negativo");    
        }else{
            document.getElementById('comp').innerHTML = (" Menor que cinco");
        }
    } else if (x == 5) {
        document.getElementById('comp').innerHTML = (x+" Igual a 5");
    } else {
        document.getElementById('comp').innerHTML = (x+" Maior que 5");
    }
}
