const lista = [
    1,
    2,
    3,
    1,
    2,
    3,4
    ,2,
    2
];

const lista1Count = {};

lista.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        

    }
)
//object.entries lo que hace es transforma nuestro objeto en un sting

const lista1Array = Object.entries(lista1Count).sort(
    function(){

    }
)