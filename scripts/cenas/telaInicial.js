class TelaInicial {
  constructor() {

  }

  setup() {
    //console.debug('TelaInicial.setup()');
  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textSize(50);
    textAlign(CENTER);
    
    text('As aventuras de', width/2, height/4);
    
    textSize(100);
    
    text('Hipsta', width/2, height/4 + 100);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}