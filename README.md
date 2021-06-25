# Animalandia
Jogo infantil desenvolvido em 10 dias como desafio na formação Alpha Edtech. [Clique para jogar](https://animalandia-game.netlify.app/)

# Sobre o jogo

O jogo foi desenvolvido utilizando HTML, CSS, JavaScript, jQuery, jQuery UI e jQuery Modal.

Composto por 5 fases, cada uma com 3 níveis diferentes, o jogo consiste em exibir na tela stickers que deverão ser arrastados pela criança e soltos em uma caixinha. Se a criança mover para a caixa algum animal ou inseto, o sticker voltará para a sua posição inicial, caso contrário, será removido do cenário.

#### Quantidade de stickers por nível
  - Nível 1: 3 stickers;
  - Nível 2: 4 stickers;
  - Nível 3: 5 stickers.
  
  
Os stickers são sorteados e embaralhados antes de serem exibidos no cenário, e nunca haverá no cenário apenas stickers de objetos ou apenas stickers de animais. Após completar os 3 níveis, a criança ganha um stiker aleatório de um dos animais pertencentes àquela fase que ficará salvo em seu álbum de figurinhas. Cada fase dá até 4 figurinhas, sendo impossível ganhar figurinhas repetidas. Para completar o álbum é necessário que se jogue cada fase pelo menos 4 vezes.

O jogo também conta com um sistema de pontuação determinado pelo tempo levado para concluir os 3 níveis do jogo.

- Até 3 minutos: 100 pontos;
- Até 4 minutos e 30 segundos: 75 pontos;
- Acima de 4 minutos e 30 segundos: 50 pontos;

A pontuação é utilizada para a criação do ranking, como pontuações podem ser iguais, o tempo total (soma de todos os tempos levados para concluir uma fase) é critério de desempate.

##### Sobre a contagem do tempo:
- É iniciada apenas quando a criança clica no botão ***Jogar***;
- É pausada quando a criança clica no botão ***Voltar***;
- É retomada quando a criança clica no botão ***Continuar***;
- É interrompida quando a criança clica no botão ***Sair***;
- É interrompida quando o nível termina;
- Quando a fase é concluída, o tempo dos 3 níveis é somado.

# Como você pode jogar

O jogo foi desenvolvido para ser executado em um servidor NodeJs. O código do servidor pode ser encontrado no arquivo ***server.js*** localizado na raiz do projeto.
Não há nenhuma dependência, portanto, basta criar o seu servidor, fazer upload dos arquivos desse repositório e se divertir.

# Equipe de desenvolvimento

- [Ana Paula Oliveira](https://github.com/anapolima)
- [Juliana Burzlaff](https://github.com/JulianaBurzlaff)
- [Luana Lessa](https://github.com/luanalessa)
