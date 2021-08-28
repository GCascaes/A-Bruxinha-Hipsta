class Player extends Animation {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, somPulo) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - altura - variacaoY;
    this.y = this.yInicial;
    this.aceleracaoMaxima = 2;
    this.velocidadeMaxima = 10;

    this.aceleracao = 0;
    this.velocidade = 0;

    this.velocidadeDoPulo = 0;
    this.gravidade = 2;
    this.alturaDoPulo = 25;
    this.contadorPulo = 0;
    this.maximoPulos = 2;
    
    this.tempoInvencibilidade = 2000;
    this.invencivel = false;
    
    this.piscando = false;
    this.periodoPiscandoTotal = 20;
    this.periodoPiscandoLow = 10;

    this.somPulo = somPulo;
  }

  move() {
    if (this.velocidade > 0)
      this.aceleracao = -this.aceleracaoMaxima;
    if (this.velocidade < 0)
      this.aceleracao = +this.aceleracaoMaxima;
    if (this.velocidade === 0)
      this.aceleracao = 0;

    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(D)) && !this.estaDepoisDaTela(this.largura/4)) {
      this.aceleracao = +this.aceleracaoMaxima;
    }
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(A)) && !this.estaAntesDaTela(this.largura/4)) {
      this.aceleracao = -this.aceleracaoMaxima;
    }
    
    if (this.estaAntesDaTela()) {
      this.aceleracao = +this.aceleracaoMaxima;
    }
    if (this.estaDepoisDaTela()) {
      this.aceleracao = -this.aceleracaoMaxima;
    }

    if (this.estaNoChao()) {
      this.velocidade += this.aceleracao;
      if (this.velocidade > this.velocidadeMaxima)
        this.velocidade = this.velocidadeMaxima;
      if (this.velocidade < -this.velocidadeMaxima)
        this.velocidade = -this.velocidadeMaxima;
    }

    if (this.velocidade != 0) {
      this.x += this.velocidade;
    }
  }

  pula() {
    if (this.contadorPulo < this.maximoPulos) {
      this.velocidadeDoPulo = -this.alturaDoPulo;
      this.contadorPulo++;
      this.somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.estaNoChao()) {
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.contadorPulo = 0;
    }
  }

  estaNoChao() {
    return this.y >= this.yInicial;
  }

  estaAntesDaTela(margemDeSeguranca = 0) {
    return this.x - margemDeSeguranca < 0;
  }

  estaDepoisDaTela(margemDeSeguranca = 0) {
    return this.x + this.largura + margemDeSeguranca > width;
  }

  estaColidindo(inimigo) {
    if (this.invencivel)
      return false;
    
    const precisaoH = 0.55;
    const precisaoV = 0.85;

    //noFill();
    //rect(
    //  this.x + this.largura * (1 - precisaoH) / 2,
    //  this.y + this.altura * (1 - precisaoV) / 2,
    //  this.largura * precisaoH,
    //  this.altura * precisaoV);
    //rect(
    //  inimigo.x,
    //  inimigo.y,
    //  inimigo.largura,
    //  inimigo.altura);

    const colisao = collideRectRect(
      this.x + this.largura * (1 - precisaoH) / 2,
      this.y + this.altura * (1 - precisaoV) / 2,
      this.largura * precisaoH,
      this.altura * precisaoV,
      inimigo.x,
      inimigo.y,
      inimigo.largura,
      inimigo.altura
    );

    return colisao;
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    //this.piscando = true;
    setTimeout(() => {
      this.invencivel = false;
      //this.piscando = false;
    }, this.tempoInvencibilidade);
  }
}