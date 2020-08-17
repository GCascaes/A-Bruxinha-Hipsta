function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  frameRate(30);
  
  telaInicial = new StartMenu();
  jogo = new Game();
  
  telaInicial.setup();
  jogo.setup();

    cenaAtual = 'telaInicial';

  gameScenes = {
    telaInicial,
    jogo,
    gameOver: () => console.log('game over'),
  };
  
  botaoGerenciador = new SceneButton('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  gameScenes[cenaAtual].draw();
}