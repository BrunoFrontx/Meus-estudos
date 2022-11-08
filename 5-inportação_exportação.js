// Inportação e exportação em javascript , abordarei em um mesmo arquivo como funciona porem nao se  usa assim.
// Serve para organizar nosso codigo, conforme a gente vai fazendo uma aplicação, para evitar confusão na hora de ler o codigo ou debugar e vale para toda as linguagens.


// fazendo exportação : arquivo de funçoes 

 function gets(){
    return 10;
 }

 function print(texto){
    console.log(texto)
 }

  // sintaxe para exporta os objetos do arquivo:
   module.export = {gets , print} // aqui estou exportando as funções com essa sintaxe

 //----------------------------------------------------------------------------------------------------------------------------------------------------------


 // fazendo a inportação novo arquivo onde    adicionamos  arquivo que sera inportado.

 const funcoes = require(`./nome do arquivo`); //   adicionando o arquivo para fazer a inportação dentro do require que sera armazenado
                                               // os valores da exportação dentro do objeto(variavel)

 console.log(funcoes.gets()) // aqui estou chamando o objeto e a função que foi inportada
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

 // object destruct "destruir o objeto"  
  const {gets, print} = require(`./nome do arquivo`);
  print(gets()) // O print tem como objetivo mostrar algo na saida através de seu parametro, que recebe algo.
               // e o gets mostrará seu valor, que foi armazenado como parametro do print
//-------------------------------------------------------------------------------------------------------------------------------//

