function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  frameRate(30);
  
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  
  telaInicial.setup();
  jogo.setup();
  
  cenas = {
    telaInicial,
    jogo,
    gameOver: () => console.log('game over'),
  };
  
  //botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}