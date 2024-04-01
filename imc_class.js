class Pessoa{
    constructor(nome,idade,peso,altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    calculaImc(){
        let peso = this.peso
        let altura = this.altura
        let imcResultado = peso / (altura * altura)
        return imcResultado.toFixed(2)
    }

    classificaImc(){
        let imcResultado = this.calculaImc()
    }
}