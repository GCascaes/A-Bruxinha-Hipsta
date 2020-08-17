class Animation {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - altura - variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
    
    this.piscando = false;
    this.periodoPiscandoTotal = 0;
    this.periodoPiscandoLow = 0;
    this.cicloPisca = 0;
  }

  exibe() {
    this.anima();
    
    if (!this.piscando)
      this.cicloPisca = 0;
    
    if (this.piscando){
      this.cicloPisca++;
      
      if (this.cicloPisca > this.periodoPiscandoTotal)
        this.cicloPisca = 0;
      
      //console.log("this.periodoPiscandoLow: " + this.periodoPiscandoLow + "; this.cicloPisca: " + this.cicloPisca);
      
      if (this.cicloPisca <= this.periodoPiscandoLow)
        return;
    }
    
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length) {
      this.frameAtual = 0;
    }
  }
}