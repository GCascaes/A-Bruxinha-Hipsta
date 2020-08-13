class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;

    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 15;
    this.yInicial = 15;
    this.deltaX = 5;
    this.deltaY = 5;

    this.vidasPorLinha = 15;
  }

  exibe() {
    for (let i = 0; i < this.vidas; i++) {
      const linha = floor(i / this.vidasPorLinha);
      const posicaoX = this.xInicial + (i - linha * this.vidasPorLinha) * (this.largura + this.deltaX);
      const posicaoY = this.yInicial + linha * (this.altura + this.deltaY);

      image(imagemVida, posicaoX, posicaoY, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas < this.total)
      this.vidas++;
  }

  perdeVida() {
    this.vidas--;
  }
  
  gameOver(){
    return this.vidas <= 0;
  }
}