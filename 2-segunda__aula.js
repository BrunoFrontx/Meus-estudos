//Veja meus estudos dobre funções
// oque é funções, sa bloco de codigos que quando chamado retorna um valor

// sintaxe de declaração

const primeira__função = () => { // ESSA É UMA ARROW FUNCITION
    console.log("SOU AERROW FUNCITION")
}

function segunda__funçao (){ // ESSA É O MODELO TRADICIONAL USADO
    console.log('sou modelo tradicional')

}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//desafio com base nos outros desafios do arquivo primeria aula 


let indice = ""

 
function calcular__imc (peso , altura){
    
  return indice = peso/ (altura * altura)
}

function resultado__imc (indice) {
    if( indice <  18.5){
        return ("Voce esta abaixo do peso")
    }
    else if (indice >= 18.5 && indice <= 25){
      return("Peso normal")
    } else if (indice >= 25 && indice <= 30) {
       return ("Acima do peso")
   } else if ( indice >= 30 && indice <= 40) {
      return("Obeso")
   }
   else if (indice > 40){
      return(" Obesidade Grave")
   
   }

}

function principal () {
    let peso = 75
 let altura = 1.80

 const imc = calcular__imc (peso , altura)
console.log (resultado__imc(imc))
}
principal()
   
//------------------------------------------------------------------------------------------------------------------------------------------

function escreve__nome (nome){
    console.log (`meu nome é : ${nome}` )
}

 escreve__nome("Bruno");

 //-------------------------------------------------------------------------------------------------------------
 // verificar se é maior idade

 function maior__idade (idade){
   if (idade >= 18) {
    console.log(" voce é maior de idade")
   }
   else{
    console.log("voce é menor de idade")
   }

 }

 const idade = 17
 maior__idade(idade);

 //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Desafio acrescismo ou desconto de acordo com a opção de pagamento
 
 function aplicar__desconto(valor , desconto){ //oque vai acontecer ai, a função ela vai receber dois parametros, valor, desconto
                                              // o calculo matematico é oque sera retornado nessa função por si só nao tem nenhum resultado.
                                            // mas apartir do momento que chamamos essa função, podemos passar dois paramentros que referencia
 return valor - (valor * desconto/100)       // a esse calculo matematico, valor , e um desconto.
                                            // quando passamos o parametro do valor do produto de inicio, ele ocupara a posição de valor no parametro da função
 }                                          // e quando passamos o valor do desconto no   segundo parametro ele ocupara a posição de desconto do parametro da função
                                            // dai retornara esse calculo matematico 
                                     

 function aplicar__juros (valor , juros){ // aqui funciona da mesma forma da primeira função, oque muda é apenas um sinal de adição, pois aqui vamos acresentar juros

    return valor + (valor * juros/100) 
 }




 const preço_etiqueta = 100 // aqui é o valor do produto que vamos passar como primeiro parametro da função, o desconto vamos passar em numeros mesmo
 const opção = 4

 


 if (opção == 1){
    console.log(aplicar__desconto(preço_etiqueta , 10)) // aqui chamamos a função "aplica__desconto" , observe que nela eu adicionei, o nome da variavel 
 }                                                      // como primerio parametro da função, que conrresponde ao valor, e como segundo parametro eu adicionei apenas o numero          
 else if (opção == 2){
    console.log( aplicar__desconto(preço_etiqueta , 5)) // Aqui funciona igual o primeiro exemplo

 }
 else if (opção == 3){
     console.log(preço_etiqueta)
 }
 else if( opção == 4){
    console.log(aplicar__juros(preço_etiqueta , 10)) // Aqui funciona igual o primeiro exemplo so que com juros, porem a forma de parametro é a mesma
 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


















