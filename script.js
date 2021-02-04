var acumulador=0;
var sinal = 0;
var estado=0;

function apagarTudo(){
    document.getElementById("field").innerHTML = "0";

}

function apagarValor(){
    const strxx = document.getElementById("field").textContent;
    if(strxx.length > 1){
        document.getElementById("field").innerHTML = strxx.substr(0, strxx.length-1);
    }

}


function myFunction(prop){
    let elemento = document.getElementById("field").textContent;
    let vx = Number.isNaN(parseInt(prop))?-1:prop; // verifica se é um numero que veio da tela
    //Aqui vai adicionar os valores à string

    if(vx != -1){
        if (elemento!="0"){
            if (estado == 0){
                document.getElementById("field").innerHTML = prop;
            }else{
                document.getElementById("field").innerHTML = elemento + prop;
            }
            estado = estado + 1;
        }else{ 
            document.getElementById("field").innerHTML = prop;
            if(prop!="0"){
                estado = estado + 1;
            }
        }
    }
}


/*
1ºSituação: clicar no (+,-,x,/) se tiver zero nada deve acontecer e o acumulador é zero
2ºSituação: clicar no (=) se tiver zero nada acontece e o acumulador é zero
3ºSituação: clicar no (+,-,x,/) se for a primeira vez (o acumulador seja zero) então eu insiro o valor no acumulador e insiro valores depois pode acontecer que
            3ºSituação 1possivel: depois clicar no (=) deve calcular o acumulador + o valor atual na tela e apresentar o resultado e o acumulador fica igual a zero
                    3ºSituação 1-1 possivel: se clicar (+,-,x,/) deve adicionar no acumulador
                    3ºSituação 1-2 possivel: se clicar num numero deve funcionar normalmente com o acumulador igual a zero
            3ºSituação 2possivel: depois clicar no (+,-,x,/) deve apresentar o resultado e o acumulador recebe o valor da solução

*/
function calcular(prop){
    let resultado = 0;
    let cval = document.getElementById("field").textContent;
    valor = Number.parseInt(cval);
    console.log(valor);
    console.log(prop);
    console.log(acumulador);
    console.log(sinal);
    console.log(estado);

    if(estado!=0){
        if(sinal!=0){
            if(sinal==1){valor = acumulador + valor;}
            if(sinal==2){valor = acumulador - valor;}
            if(sinal==3){valor = acumulador * valor;}
            if(sinal==4){
                if(valor!=0){
                    valor = acumulador / valor;
                }else{
                    resultado = "Não é possivel dividir por zero";
                    prop = "#";
                    acumulador=0;
                    sinal=0;
                }
            }
        }
        switch (prop){
            case '+':
                acumulador = valor;
                resultado = valor;
                sinal = 1;
                break;
            case '-':
                sinal = 2;
                acumulador = valor;
                resultado = valor;
                break;
            case '*':
                sinal = 3;
                acumulador = valor;
                resultado = valor;
                break;
            case '/':
                sinal = 4;
                acumulador = valor;
                resultado = valor;
                break;
            case '=':
                //retart dos valores iniciais
                sinal = 0;
                acumulador = valor;
                resultado = valor;
                break;
            default:
                console.log('Desculpa mas está errado');
                break;
        }
        document.getElementById("field").innerHTML = resultado;
        estado = 0;
    }else{
        switch (prop){
            case '+':
                sinal = 1;
                break;
            case '-':
                sinal = 2;
                break;
            case '*':
                sinal = 3;
                break;
            case '/':
                sinal = 4;
                break;
            case '=':
                //retart dos valores iniciais
                sinal = 0;
                acumulador = 0;
                document.getElementById("field").innerHTML = 0;
                break;
            default:
                console.log('Desculpa mas está errado');
                break;
        }
    }

}







function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    if(key==13){return "="} // assim o enter entra como "="
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    let str = keyPressed(evt);
    console.log(str);
    if (str == "1" || str == "2" || str == "3" || str == "4" || str == "5" || str == "6" || str == "7" || str == "8" || str== "9" || str == "0"){
        myFunction(str);
    }
    if (str == "+" || str == "-" || str == "*" || str == "/" || str == "="){
        calcular(str);
    }
};




