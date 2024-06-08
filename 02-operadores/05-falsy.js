// short-circuit

//Valores que devuelven "Falso" o "Falsy"
    /*
    false
    0
    ''
    null
    undefined
    NaN
    */

    let nombre = 'Tonoto';
    let username = nombre || 'Anonimo'; //Mostrara 'Anonimo' si no hay un nombre asignado
    console.log(username);

    function fn1(){
        console.log('soy funcion 1'); //Es mostrada porque la funcion es "True"
        return true;
    }

    function fn2(){
        console.log('soy funcion 2'); //Es mostrada porque la funcion es "True"
        return true;
    }

    let x = fn1() && fn2(); //Se muestran ambas funciones porque ambas son "True"
    //

