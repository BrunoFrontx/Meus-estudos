# vamos estudar markdown
#### Markdown é uma linguagem de marcação que pode ser convertida para HTML. É bem simples de aprender, pois sua leitura e escrita são muito fáceis. Markdown é muito utilizada em documentação de software e é a linguagem oficial de documentação no GitHub.

## Cabeçalho em markdown.
  ##### ultilizamos em markdown  para definir nosso cabeçalho, onde uma hastag define um cabeçalho de grande peso na pagina e conforme for diminuindo o peso ou seja a inportancia aumentamos as hastag.

   ##### veja abaixo como funciona. para definir nosso cabeçalho, onde uma hastag (#) define um cabeçalho de grande peso (principal) na pagina e conforme for diminuindo o peso ou seja a inportancia aumentamos as hastag.

   ## veja abaixo como funciona.
 # Titulo-1  funciona como o <h1></h1>
 ## Titulo-2  funciona como o <h2></h2>
 ### Titulo-3  funciona como o <h3></h3>
 #### Titulo-4  funciona como o <h4></h4>
 ##### Titulo-5 funciona como o <h5></h5>
 ###### Titulo-6  funciona como o <h6></h6>

### Essa é a forma que usamos para declarar titulo, obs: declare de acordo com seu peso na pagina que voce esta construindo, e fique atento as hastgas, pois ela define o peso(inportancia) do titulo

## Paragrafo 

  o paragrafo pode ser feito de forma normal, nao precisa de uma tag especifica, o markdown ja entende que ali é um paragrafo.

## Quebrar linha em markdown, so encerrar um paragrafo, dê dois espaço ao final do paragrafo , não basta apenas dar um entender.  
 Tem que dar dois espaços.
   

## Trabalhando com enfase ha uma palavra 
 ### Para negrito
ultilizamos: **Brunão** ou __Brunão__ : dois asterisco de cada lado com a palavra dentro , ou dois underline de cada lado e a palavra dentro.

### Para italico
  Ultilizamos : *Brunão* ou _Brunão_ : um asterisco de cada lado com a palavra dentro ou um underline de cada lado e a palavra dentro. 

### Para italico e negrito
 Ultilizamos : ***Brunão*** ou **_Brunão_** ou __*Brunão*__

### Para riscar uma palavara

Ultilizmos : ~~Brunão~~ adicionamos dois tios de cada lado com a palavra dentro
 
### Bloco de citação

Ultilizamos : > Olá pessoal : sinal de maior que antes da palavra que deseja citar

### Bloco de citação com negrito

ultilizamos : > **Olá** sinal de maior que para fazer a sitação e dois asterisco de cada lado com a palavra dentro


### Linhas horizontais

ultilizamos: *** espaços abaixo do texto , e tem varaias outras formas, --- , * * * , - - -, sempre abaixo caso voce queira criar varias linhas. conforme for adicionando uma abaixo da outra mais linhas tera


### Lista não ordenada

Ultilizamos um asterisco na frente da lista e damos espaço. 
* Item_1 		
* Item_2
---
Ultilizamos um sublinhado na frente da lista e damos espaço. 
- Item_1 		
- Item_2
---
Ultilizamos um sinal de + na frente da lista e damos espaço. 		
+ Item_1 		
+ Item_2
---

Para adicionar um subitem:		
Funciona da mesma forma, so que devemos da um tab no item que é o subitem
* Item_1 		
 *Subitem		
* Item_2
---

### Lista ordenadas

Ultilizamos : 1. item , adicionamos o numero na frente do item.

### links em markdown
Ultilizamos : [] colchetes () parenteses
 dentro do colchetes adicionamos o nome que voce quer exibir em seu link e dentro do parenteses adicionamos a url do link

### Imagens markdown

ultilizamos: !sinal de exclamação [] colchetes para adicionar o nome da imagem () e o parenteses para url da imagem.![]()

### Imagem com link markdown

Ultilizamos:um colchete que  engloba tudo		 [![nome da imagem](url da imagem)]

### Tabelas Markdown

Ultilizamos: Paepe espaço e o nome | nome | idade |
  e abaixo de cada titulo da tabela para separar linhas usamos paepe espaço e  sublinhado de acordo com o tamanho de letras do titulo para uma indentarção melhor | --- | usamos só uma vez , depois quando for adicionando os itemns o markdown ja separa automaticamente

 | nome |idade |
 | ---- |-----
 | Bruno | 22 |

### Blocos de codigo

 Ultilizamos: selecionamos o bloco de codigo e no inicio adicionamos 3 crases e no final mais 3 crases.  
    ex :
        ``` const username =		
          `Brunão `  
         const password = ´secret ´ 
         ```

### Outra forma de mencionar bloco de codigo
 Ultilizamos : ```Javascript  
     ``` const username =  
         `Brunão `  
         const password = ´secret ´ 
         ```
          ```js			
   neste caso ultilizamos a linguagem que estamos progamando, e ele dará cor pro nosso codigo.

### Adicionar emojis 		
  ultilizamos:  :nome do emoji		
  site para nomes de emojis - Emoji Cheat sheet