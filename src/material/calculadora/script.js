function calculadora(){

        let numeroUm = document.getElementById("valor1").value;
        let numeroDois = document.getElementById("valor2").value;
        
        // tudo o que entra nos inputs é string, por isso é necessário converter para número.
        let soma = (parseInt(numeroUm) / parseInt(numeroDois));

        console.log("A soma é: " + soma);
        
        swal("A soma é: " + soma);
}

//o Swal substitui o Alert, deixando o design mais bonito.
