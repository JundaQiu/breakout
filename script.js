/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
var x = 0;
var y = 0;
function draw() {
  clear();
  x = x + 5;
  y = y + 5;
  fill(100, 300, 255);
 
  // teken een cirkel
  ellipse(x,y,80,80);

  if(y > 50){
      y = y - 5;
  }
}