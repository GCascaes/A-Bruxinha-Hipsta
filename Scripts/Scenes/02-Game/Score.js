class Score{
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT);
    textSize(50);
    
    if (this.pontos >= 0){
      fill('#FFFFFF');
    }
    
    if (this.pontos < 0){
      fill('#FF0000');
    }
    
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(quantidadePontos = 1){
    this.pontos += quantidadePontos;
  }
  
  removerPontos(quantidadePontos = 1){
    this.pontos -= quantidadePontos;
  }
  
  gameOver(){
    return this.pontos < 0;
  }
}