        //const perimetroCuadrado = ladoCuadrado * 4;
        //const areaCuadrado = ladoCuadrado * ladoCuadrado ;
        /*
        console.group("Cuadrado")
        const ladoCuadrado = 5;
        console.log("Los lados del cuadrado miden: " + ladoCuadrado)

        const perimetroCuadrado = ladoCuadrado * 4;
        console.log("El perimetro del cuadrado es"  +  perimetroCuadrado)

        
        console.log("El area del cuadrado es "  +  areaCuadrado)
        console.groupEnd();
        //importante console.group
        console.group("Triangulo")
        const basetriangulo = 4;
        const ladoTriangulo1 = 6
        const ladoTriangulo2 = 6
        const alturaTriangulo = 5.5;

        console.log(
            "Los lados del triangulo miden: "
            + ladoTriangulo1 
            + "cm, " 
            + ladoTriangulo2 
            + "cm, " 
            + basetriangulo 
            + "cm"
            );
            console.log("La altura del triangulo es :" + alturaTriangulo)
            
            const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + basetriangulo 
            console.log('el perimetro del triangulo es: ' + perimetroTriangulo)

            const areaTriagulo = (basetriangulo * alturaTriangulo ) / 2
            console.log('el area del triangulo es: ' + areaTriagulo)

        console.groupEnd();
        console.group("Circulo")
        const pi = Math.PI
        const radio = 5
        console.log('el radio del circulo es de' + radio) 
        const perimetroCirculo =pi * radio
        console.log('la circunferencia del circulo es de: ' + perimetroCirculo)
        const areaCirculo = (radio * radio ) * pi;
        console.log('el area del circulo es de: ' + areaCirculo)
        console.groupEnd()*/

        

        function perimetroCuadradoFuncion(lado){
            return lado * 4
        }

        function areaCuadradoFuncion(lado){ 
            return lado * lado
        }

        function areaTriaguloIsosceles(ladoA,ladoB,ladoBase){
            return ( (ladoBase * (Math.sqrt((ladoA* ladoA)-(ladoBase * ladoBase)/4 )))/2)
        }
        function perimetroTriaguloIsosceles(lado1,lado2,lado3){
            return (Number(lado1) + Number(lado2) + Number(lado3))
        }

        function alturaTrianguloIsosceles(ladoA, ladoBase){
            return( Math.sqrt((ladoA *ladoA) - ((ladoBase*ladoBase)/4)))
        }
        //AQUI INTERACTUAMOS CON EL HTML

        console.log(`El area del triangulo isoseles es ${areaTriaguloIsosceles(5,5,5)}`)
        console.log(`El altura del triangulo isoseles es ${alturaTrianguloIsosceles(5,5)}`)

        function calcularAreaCuadrado(){
            // para leer el contenido html la etiqueta input cuadrado
            const input = document.getElementById("InputCuadrado");
            // el valor del input cuadrado
            const value = input.value;
            const area = areaCuadradoFuncion(value);
            alert(area);
        }
        function calcularPerimetroCuadrado(){
            const input = document.getElementById("InputCuadrado");
            const value = input.value;
            const perimetro = perimetroCuadradoFuncion(value);
            alert(perimetro);

        }