// Estudando Arrays e loops (estrutura de repetição)
// arrays é agrupamento de dados

//sintaxe

const aluno = ['Bruno', 'Jason' , 'nosaqj'] // froma de se atribuir valores a array
// outra forma de se atribuir

aluno.push("onurb") // aqui estou atribuindo valor ao array
console.log(aluno)
console.log(aluno.length) // aqui estou identificando quantos valores ha no array atraves do length
// array ele sempre inicia a contage de seus elementos com valor 0
//---------------------------------------------------------------------------------------------------------------------------------------------------------

// iterando arrays com estrutura de repetição

// sintaxe for

const nomes = ['bruno', 'silva' ,'silva']

for (let i =0; i < nomes.length; i++){  // "para(for) let variavel contadora que vai recebendo valores a cada vez que o loop é execultado
     console.log(nomes[i]) //  dai usamos um operador relacional para dar a condição, no caso do exemplo, i variavel inicializada com 0
                           // enquanto i for menor que a quantidades de elementos do array (i++ repetir de 1 em 1 ) até atingir a quantidades de elementos do array
}

// progaminha dado um numero prechendo uma variavel ele mostra a tabuada

const numero = 10

for(let i = 0; i < 10 ; i++ ){
    console.log(`${numero} = ${numero  + i}`)
}

let numero_par = [1 , 2 ,3 ,4 ,5 ,6 ,7 ,8, 9, 10]

//  Exercicio imprimir numeros pares
for(i = 0; i < numero_par.length; i++){
    const numero = numero_par[i]
    if(numero_par % 2 === 0){
        console.log(numero)
    }
}



      // loop while e do while com uso de arrays em condicionais //Obseveção há um errinho , tente descobrir ultilizando o debug abaixo

      const nomes_para_pecorrer = new Array (" bruno " , "jeta" , "jota" , " jita"); //novo modo de declarar array
      let receba_valor = nomes_para_pecorrer.length
    
    const promovido = 2;
    
    
          // loop while
      let conta_i = 0;  //variavel contadora fica fora do loop
        while( conta_i < receba_valor){ // recebe uma condição de inicio (while)
          if (promovido == 2){
             console.log (nomes_para_pecorrer[conta_i], "voce foi promovido")
             break
          }else {
              console.log ( " voce nao foi promovido")
              break
          }
        }
           
    }
           conta_i ++  // faz sua contagem no final (while)
        
    
       // loop do while
    
          let conta_it = 0; // variavel de controle
           do { // repita
             console.log(nomes_para_pecorrer[conta_i]) // esse bloco de comando
             conta_i ++ // incrementando de 1e 1
            
           } while (conta_i <= receba_valor); // enquanto a conta_i for menor que receba valor
    
          //loop for iteragindo com array e condicional
    
          for(let conta_i = 0; conta_i < receba_valor; conta_i++){
             if(promovido == 1){
                console.log(nomes_para_pecorrer[conta_i] , "parabens Bruno promovido")
                break
         
             }
              
          }
    






// Debugando codigo  para entender oque esta acontecendo

// vai na lista de numeros  que fica ao lado do seu codigo , do lado esquerdo dos numeros aparecerá uma circulo vermelho conforme mecher o mouse ela acompanhará
// marque aonde voce quer verificar , aperte na bolinha vermelha (braeckpoint)
// feito isso  vai no lado esquerdo de sua plataforma e onde haver um "besourinho" (de forma bem didatica lhe explicando)
//clicando la, vai em execultar e depurar
// voce pode ir em inperção e adicionar qual variavel voce quer observa digitando o nome dela
// vai aparecer um painel de controle no meio da tela, voce pode clicar na primeria opção que execultara todo seu codigo de uma so vez
// ou na seta que esta na em sentido destro , clicando la vai debugando linha por linha

//Bons estudos