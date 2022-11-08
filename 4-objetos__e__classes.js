
 //Aula de objetos
// Objeto ele agrupa valores. Ele agrupa caracteristicas  que corresponde aquele objeto

//sintaxe

// const Pessoa = {   //Aqui é a sintaxe de um objeto, o nome desse objeto, corresponde com as caracteristicas que ele vai agrupar 
//     nome :`Bruno`,
//     idade : 22 ,
// };
 
// console.log(Pessoa.nome) //sintaxe de chamada 

// Podemos tambem criar funções atreladas a esse objetos, e o nome dado a essa operação é metodos.

const Aluno = {
    nome_aluno : `Bruno`,  //sintaxe para adicionarmos as caracteristicas desse objeto
    idade_aluno : 22,
    Semestre_cursado: 2,


   credenciais__aluno: function(){     //Sintaxe para criar uma função dentro de um objeto
    console.log (`aluno , ${this.nome_aluno} idade ${this.idade_aluno} semestre cursado ${this.Semestre_cursado}`)  // This é uma forma de trazermos as propriedades daquele objeto na função

    }
}
   Aluno.credenciais__aluno (); // para chamar a função devemos mencionar o Objeto que corresponde com ela.
//------------------------------------------------------------------------------------------------------------------------------------------------------------///

//Classe Tambem é uma abstração para um conjunto de caracteristica que corresponde a o objeto

//Sintaxe de criação de uma class

class carro {
    cor;
    marca;
    motor;
}

const meu__carro = new carro() //atribuindo valores a objeto carro
meu__carro.cor = `vermelho`; 
meu__carro.marca =`BMW`;
meu__carro.motor = `500cavalos`

console.log (meu__carro) //aqui eu chamo todos os elementos que compõe o objeto carro
console.log(meu__carro.marca) // aqui chamo apenas uma caracteritisca daquele objeto

// podemos tambem criar um metodo que adcionamos parametros

class moto {
    cor_moto;
    marca_moto;
    motor_moto;

    constructor (cor_moto , marca_moto) {  //aqui estou chamando ao objeto dentro do constructor, e ele pode me retornar parametros
        this.cor_moto = cor_moto
        this.marca_moto = marca_moto
        
    }
}
const minha__moto = new moto(`preta , kawvasic`)  //aqui estou atribuindo valores como parametros em decorrencia ao metodo constructor

console.log(minha__moto);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Exercicios 
// Criar uma class para representar carros.
 // os carros possuem uma marca , uma cor  e um gasto de combustivel medio por kilometro
 // crie um metodo que dado a quantidade de quilometro e o preço do combustivel nos de o valor gasto em reais

 class Car {   // usando desta forma por que iniciei uma class com nome carro
 
    marca__car;
    cor__car;
    gasto__combustivel__km;

    constructor (marca__car, cor__car , gasto__combustivel__km){
        this.marca__car = marca__car;
        this.cor__car = cor__car;
        this.gasto__combustivel__km = gasto__combustivel__km;
    }

     calcula__gasto(distancia , preco__combustivel){

        return distancia *  this.gasto__combustivel__km * preco__combustivel;

     }



 }
  const  car__meu = new Car (`BMW`, `VERMELHO`, 1/4);

console.log(car__meu.calcula__gasto(10 , 5)) ; 

//-------------------------------------------------------------------------------------------------------------------------------------------------
 // Desafio calculando imc de uma pessoa com objetos: algo tirado da cabeça os valores da classificação do imc nao estao coerentes

  class Pessoa {
      nome_pessoa;
      peso_pessoa;
      altura_pessoa;

      constructor(pessoa_nome , pessoa_peso, pessoa_altura){ // constructor nele adicionamos parametros, que são variaveis que sera armazenada algum valor na frente
        this.nome_pessoa = pessoa_nome     // aqui estou chamando a propriedade do  objeto e armazenando dentro dele o valor que a variavel do constructor recebera como parametro
        this.peso_pessoa = pessoa_peso   // o exemplo acima serve mesma forma  
        this.altura_pessoa = pessoa_altura  // o exemplo acima serve mesma forma 
         
      }

       calcular_imc () {
        return this.peso_pessoa/(this.altura_pessoa * this.altura_pessoa);
       }
       classificar_imc(){
        const imc_pessoa = this.calcular_imc()
        if( imc_pessoa <= 18.75){
            return ('Voce esta desnutrido')
        }
        else if ( imc_pessoa === 22 && imc_pessoa <= 30 ){
            return  ('Voce esta normal')
        }
         else{
            return (' Voce esta obeso')
         }
         
       }
   
       
  }

  const Bruno = new Pessoa ("Bruno" , 30 , 1.8)  // os valores armazenado aqui ficam na variavel do parametro do constructor , e esses valores sao armazendos dentro
    
console.log(Bruno.classificar_imc())


//Bons estudos