function compare(x) {
    if (x == '') {
        alert('O campo está vazio');
        return false;
    }
    if (x < 5) {
        if (x<0){
            alert(x+" Menor que cinco e negativo");    
        }else{
            alert(" Menor que cinco");
        }
    } else if (x == 5) {
        alert(x+" Igual a 5");
    } else {
        alert(x+" Maior que 5");
    }
}
