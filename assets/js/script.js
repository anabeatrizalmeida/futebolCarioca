const elementoTime =
  document.getElementById(
    "time"
  ); /*cria a variável elementoTime e coloca nela o elemento com o id time. */
const elementoApelido =
  document.querySelector(
    "#apelido"
  ); /*cria a variável elementoApelido e coloca nela o elemento com o id apelido.*/
const elementoImagem =
  document.querySelector(
    "#imagem"
  ); /*cria a variável elementoImagem e coloca nela o elemento com o id imagem.*/
const elementoAudio =
  document.querySelector(
    "#audio"
  ); /*cria a variável elementoAudio e coloca nela o elemento com o id audio.*/
let elementoBotao =
  document.querySelector(
    "#alterar"
  ); /*cria a variável elementoBotao e coloca nela o elemento com o id botao.*/

/* adicionando o evento clicar (click) no elementoBotao para executar a função onde vão estar as mudanças na página a cada clique.*/
elementoBotao.addEventListener("click", () => {
  if (elementoBotao.value == "flamengo") {
    elementoTime.innerText =
      "Clube de Regatas do Flamengo (Flamengo)"; /*altera o nome do time (texto do elemento time).*/
    elementoApelido.innerText =
      "Mengo, Mengão, Malvadão, Fla, O Mais Querido, O Time do Povo, O Time da Massa, Rubro-Negro Carioca..."; /*altera o apelido do time (texto do elemento apelido).*/
    elementoImagem.src =
      "./assets/img/flamengo.png"; /* altera a imagem do time. */
    elementoAudio.src =
      "./assets/audio/flamengo.mp3"; /* altera o audio do time. */
    elementoBotao.value = "vasco"; /* altera o valor do botão.*/
  } else if (elementoBotao.value == "vasco") {
    elementoTime.innerText =
      "Club de Regatas Vasco da Gama (Vasco)"; /*altera o nome do time (texto do elemento time).*/
    elementoApelido.innerText =
      "Gigante da Colina, Almirante, Time da Virada, Vascão, Vascudo, Trem-bala da Colina, Cruzmaltino..."; /*altera o apelido do time (texto do elemento apelido).*/
    elementoImagem.src =
      "./assets/img/vasco.png"; /* altera a imagem do time. */
    elementoAudio.src =
      "./assets/audio/vasco.mp3"; /* altera o audio do time. */
    elementoBotao.value = "fluminense"; /* altera o valor do botão.*/
  } else if (elementoBotao.value == "fluminense") {
    elementoTime.innerText =
      "Fluminense Football Club (Fluminense)"; /*altera o nome do time (texto do elemento time).*/
    elementoApelido.innerText =
      "Tricolor, Flu, Fluzão, Nense, Pó de arroz, Time de Guerreiros..."; /*altera o apelido do time (texto do elemento apelido).*/
    elementoImagem.src =
      "./assets/img/fluminense.png"; /* altera a imagem do time. */
    elementoAudio.src =
      "./assets/audio/fluminense.mp3"; /* altera o audio do time. */
    elementoBotao.value = "botafogo"; /* altera o valor do botão.*/
  } else if (elementoBotao.value == "botafogo") {
    elementoTime.innerText =
      "Botafogo de Futebol e Regatas (Botafogo)"; /*altera o nome do time (texto do elemento time).*/
    elementoApelido.innerText =
      "Estrela Solitária,O Glorioso, Alvinegro carioca, Fogo, Fogão, Bota, Time de General Severiano..."; /*altera o apelido do time (texto do elemento apelido).*/
    elementoImagem.src =
      "./assets/img/botafogo.png"; /* altera a imagem do time. */
    elementoAudio.src =
      "./assets/audio/botafogo.mp3"; /* altera o audio do time. */
    elementoBotao.value = "inicio"; /* altera o valor do botão.*/
  } else if(elementoBotao.value == "inicio"){
    elementoTime.innerText =
      "Os grandes do Rio"; /*altera o nome do time (texto do elemento time).*/
    elementoApelido.innerText =
      "..."; /*altera o apelido do time (texto do elemento apelido).*/
    elementoImagem.src =
      "./assets/img/osGrandesDoRio.jpg"; /* altera a imagem do time. */
    elementoAudio.src =
      "./assets/audio/maracana.mp3"; /* altera o audio do time. */
    elementoBotao.value = "flamengo"; /* altera o valor do botão.*/
  }
});
