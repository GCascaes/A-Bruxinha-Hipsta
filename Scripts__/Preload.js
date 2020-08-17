function preload() {
    imagemPersonagem = loadImage('Assets/Images/Character/Running.png');

    imagemInimigo = loadImage('Assets/Images/Enemies/Slime.png');
    imagemInimigoGrande = loadImage('Assets/Images/Enemies/Troll.png');
    imagemInimigoVoador = loadImage('Assets/Images/Enemies/Flying-Slime.png');

    imagemVida = loadImage('Assets/Images/HUD/Heart.png');

    imagemTelaInicial = loadImage('Assets/Images/Backgrounds/StartMenu.png');
    imagemCenario = loadImage('Assets/Images/Backgrounds/Forest.png');
    imagemGameOver = loadImage('Assets/Images/HUD/game-over.png');

    fonteTelaInicial = loadFont('Assets/Fonts/StartMenuFont.otf');

    config = loadJSON("Config/config.json");

    somDoJogo = loadSound('Assets/Sounds/Soundtrack.mp3');
    somDoPulo = loadSound('Assets/Sounds/Jump.mp3');
}