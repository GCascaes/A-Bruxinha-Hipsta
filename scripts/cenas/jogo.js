class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 30, 110, 135, 220, 270, somDoPulo);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 50, 30, 52, 52, 104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    //somDoJogo.loop();

    colidiu = false;
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();

    personagem.aplicaGravidade();
    personagem.move();
    personagem.exibe();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.move();
    inimigo.exibe();

    if (personagem.estaColidindo(inimigo) && !colidiu) {
      console.log('colidiu');
      vida.perdeVida();
      personagem.tornarInvencivel();
      colidiu = true;
    }

    if (vida.gameOver()) {
      somDoJogo.stop();
      image(imagemGameOver, width / 2 - 200, height / 3);
      noLoop();
    }

    const inimigoEstaVisivel = inimigo.x <= -inimigo.largura;
    if (inimigoEstaVisivel) {
      this.indice++;
      if (this.indice >= this.mapa.length) {
        this.indice = 0;
      }
      inimigo.aparece();
      colidiu = false;
    }

    pontuacao.adicionarPonto(0.1);
    pontuacao.exibe();

    vida.exibe();
  }
}