function calcularMedia(notas)   {


    let soma = 0;
    for(c = 0; c < notas.lenght; c++)   {
        soma += notas[c];
    }


    media = soma / notas.length;
    return media;
}


function aprovacao(notas)   {
    let media = calcularMedia(notas);
    let condicao = media >= 7 ? "Aprovado" : "Reprovado" //funciona como um if


    return "Média: " + media + " Situação: " + condicao;
}


document.addEventListener('submit', function(evento)    {
    evento.preventDefault();//Cancela o evento

    let formulario = document.getElementById('formulario-01');
    let dados = new FormData(formulario);
    let objeto = {};
    let notas = [];


    for(let key of dados.keys())    {
        objeto[key] = dados.get(key);


        notas.push(parseInt(dados.get(key)));//adiciona itens no array;
    }


    console.log(notas);
    console.log(objeto);
    texto = aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto;
});