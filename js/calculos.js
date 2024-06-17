
function calculo(x,y){
    if(x==='' || y===''){
        return ('Preencha os dois campos');
    }
    var CalcString = '';
    soma = Number(x)+Number(y);
    CalcString+=("a soma de "+x+" + "+y+" é igual a "+soma+'<br />');
    divisao = x/y;
    CalcString+=("a divisão de "+x+" / "+y+" é igual a "+divisao+'<br />');
    subtracao = x-y;
    CalcString+=("a subtração de "+x+" - "+y+" é igual a "+subtracao+'<br />');
    multiplicacao = x*y;
    CalcString+=("a multiplicação de "+x+" * "+y+" é igual a "+multiplicacao);
    return CalcString;
}
    