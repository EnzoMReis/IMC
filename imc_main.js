let resposta = document.getElementById("resposta")
let calcular = document.getElementById("calcular")

calcular.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    const pessoa1 = new Pessoa(nome,idade,peso,altura)
    console.log(pessoa1)

    let imc = pessoa1.calculaImc()
    console.log(imc)

    let classifica = pessoa1.classificaImc()
    console.log(classifica)

    resposta.innerHTML = `O cliente ${pessoa1.nome} <br>`
    resposta.innerHTML += `Tem ${pessoa1.idade} anos, ${pessoa1.peso}Kg e altura de ${pessoa1.altura} <br>`
    resposta.innerHTML += `Tem um IMC = ${imc} `
})