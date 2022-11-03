// Variaveis sao onde armazenamos nossos dados
// Variaveis , no Javascript temos (Var , Let , Const) sendo Let e Const vem da nova versão do Javascript
 // Var ela é um valor que se pode alterar, foi bastante usada nos braowses passado
 // Let tabme é um valor que se pode alterar, como dito ela veio da nova versão do Javascript
 // e const é um valor que não se altera depois que definimos.


 // sintaxe de declarações de variavéis 

 var como__declara = ""

 let declara__assim = ""

 const declara__assim__tambem = ""

 // observe que toda variavél ela acompanha de um nome, é nessesario que uma variavél tenha seu indetificador e principalmente que seja abstração, do que ela vai receber

//----------------------------------------------------------------------------------------------------------------------------------------

//operadores aritimeticos temos (+ , - , ( / siginifica divisão) (*, sigifica multplicação)) esses são os operadores basicos


// sintaxe de uso

let usa__operador = 10 + 10
usa__operador = 20 * 20
usa__operador = 30 - 30
usa__operador = 40 / 40

//--------------------------------------------------------------------------------------------------------------------------------------------


 //desafio botando em pratica oque foi aprendido , EX : Progama para calcular o valor da viagem

 let preço__combustivel = 5.0
 let gasto__medio = 10
 let distancia__km = 100

 let valor__da__viagem = ''


 valor__da__viagem = (( distancia__km / gasto__medio) * preço__combustivel)

 console.log(valor__da__viagem)



//--------------------------------------------------------------------------------------------

// Estruturas condicionais (if, else) podendo tambem, aninhar elas, dependendo do desafio

//desafio de estrutura condicionais continuação do progama acima com atribuiçao do tipo de combustiveis e preços diferentes


let preço__etanol = 5.0
let preco__gasolina = 6.0
let tipo__combustivel = "gasolina"
let gasto__medio__combustivel_km = 10
let distancia__viagem__em__km  = 100

if (tipo__combustivel === "etanol"){
    console.log(( distancia__viagem__em__km / gasto__medio__combustivel_km) * preço__etanol )
}
else{ 
 console.log(( distancia__viagem__em__km / gasto__medio__combustivel_km) * preco__gasolina )

}

// operador de atribuição ( = ) È quando voce tem uma variavel e quer atribuir um valor a ela

let atribuindo = "Fui atribuido  pelo ="


//------------------------------------------------------------------------------------------------------

//operadores relacionais ( ( < maior que), (> menor que ) , (<= maior ou igual ) ,( >= menor ou igual ),(== igual), (=== igual com tipo diferente)(!= diferente), (!== diferente com tipo diferente))

let  numero = 10
let outro__numero = 20
let e__ou__nao = numero > outro__numero
 
console.log(e__ou__nao)


//operadores logicos (&&, E ), (||, OU) , (!, não)

let lanchonete = ("tem suco" == true)
let pizzaria = ("tem pizza" == false)

let vai_ter_lanche__se = lanchonete && pizzaria // oque diz ai, vai ter lanche se tiver suco "E" pizza, da mesma forma podemos usar com o (||, ou ) 
console.log(vai_ter_lanche__se)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Desafio calcular media de 3 notas tiradas por um aluno em um semestre e vericar através da media se ele passou de ano, ficou de recuperação, ou reporvado.

let primera__nota = 0
let segunda__nota = 0
let terceira__nota = 1
let media = ''
let classificação = "1 lugar"

media = ((primera__nota + segunda__nota + terceira__nota)/ 3)

if ( media >= 10){
    console.log(`Parabens aluno, você ficou em ${classificação}`)
}
else if (media >= 7 &&  media <= 9){
    console.log(`Passou de semestre`)
}
 else if (media >= 5 && media <= 7) {
    console.log (`Recuperação`)
 }
 else {
    console.log (`Recuperação`)
    
 }
 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

 //Desafio calcular o Imc de uma pessoa, e dizer se ela  esta com um peso certo, ou nao


 let peso = 75
 let altura = 1.80
 let indice = ""

  indice = peso/ (altura * altura)

  if( indice <  18.5){
      console.log ("Voce esta abaixo do peso")
  }
  else if (indice >= 18.5 && indice <= 25){
    console.log ("Peso normal")
  } else if (indice >= 25 && indice <= 30) {
     console.log ("Acima do peso")
 } else if ( indice >= 30 && indice <= 40) {
    console.log("Obeso")
 }
 else if (indice > 40){
    console.log(" Obesidade Grave")

 }
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------


 //Desafio , calcular oque deve ser pago de acordo com metodo de pagamento


 let preço__produto = 10
 let pagar__com__credito__cartao__debito = false
 let pagar__avista = false
 let pagar__duas__vezes = false
 let pagar__acima__de__duas = true

 if (pagar__com__credito__cartao__debito == true){
    console.log(preço__produto * 10/ 100 - preço__produto)
 }
 else if (pagar__avista == true){
    console.log( `Voce pagar com desconto de 5% o valor ficara ${preço__produto * 5/100 + preço__produto -1}`)

 }
 else if (pagar__duas__vezes == true){
     console.log(`Voce pagara o mesmo valor ${preço__produto}`)
 }
 else if( pagar__acima__de__duas == true){
    console.log(`Voce pagara com juros e o valor ficará ${preço__produto * 10/100 + preço__produto}`)
 }



