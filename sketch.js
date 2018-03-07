/*
 *
 * Klustera
 * Residente (March 2017)
 * 
 * Adrian Santuario
 *
 * Description: 
 * ¿Qué tan similar es Residente a Calle 13? ¿Qué tan diferentes son?
 * ¿Cuál es el ADN de sus letras?
 * Empieza a navegar y descubre las diferencias y similitudes
 *
 * Un artista evoluciona cuando conoce en verdad las herramientas que utiliza
 * ¿Cuáles son las herramientas de un compositor? : Las palabras 
 *
 *
 * Test: https://santuario.github.io/KLUSTERA_Residente/
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */


// Font
var geoMidFont
var geoSmallFont;

// Status
var STATUS;




/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {


  // Fonts
  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function setup() {

  createCanvas(displayWidth, displayHeight)
  initialize();

}

function draw() {

  drawStatus();
  drawHeader();
}



/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {

  initializeStatus();
  initializeHeader();
  setStatus("VS");

}


/*
 *****************************************
 *****************************************
 * HEADER METHODS
 *****************************************
 *****************************************
 */


function initializeHeader() {


}



function drawHeader() {
  fill(255);
  textAlign(LEFT, TOP);
  noStroke();
  //Title
  textFont(geoMidFont);
  textSize(15);
  text("Residente vs Calle 13 | Residente + Calle 13", 10, 10);

  stroke(155);

  if (mouseX > 0 && mouseX < 150 && mouseY > 0 && mouseY < 40) { //VS
    line(10, 30, 145, 30);
  } else if (mouseX > 150 && mouseX < 280 && mouseY > 0 && mouseY < 40) { //+
    line(150, 30, 280, 30);

  }


}


/*
 *****************************************
 *****************************************
 * STATUS METHODS
 *****************************************
 *****************************************
 */


function initializeStatus() {

}


function drawStatus() {


  if (STATUS == "VS") {
    drawStatusVS();
  } else if (STATUS == "PLUS") {
    drawStatusPLUS();
  }

}

function setStatus(_status) {

  if (_status == "VS") {
    STATUS = "VS";
  } else if (_status == "PLUS") {
    STATUS = "PLUS";
  }

}

function drawStatusVS() {
  background(40, 47, 47);
  stroke(155);
  line(10, 30, 145, 30);
  //var correctionXS = (windowWidth / 2) - (backgroundImage.width / 2);
  //var correctionYS = (windowHeight / 2) - (backgroundImage.height / 2);
  noStroke();
  fill(57,172,91);
  rect(0, (windowHeight / 2), windowWidth,(windowHeight / 2));
}


function drawStatusPLUS() {
  background(28, 36, 76);
  stroke(155);
  line(150, 30, 280, 30);
}


/*
 *****************************************
 *****************************************
 * UI METHODS
 *****************************************
 *****************************************
 */



function mouseClicked() {
  // initializeItems();
  // print("MIAU");
  // print(((windowWidth / 2) - mouseX) + " :: " + mouseX + " , " + ((windowHeight / 2) - mouseY) + " :: " + mouseY);

  //print(((windowWidth / 2) - mouseX) + "," + ((windowHeight / 2) - mouseY));
  //print(mouseX + ", " + mouseY)

  //print(progressMouseX);


  if (mouseX > 0 && mouseX < 150 && mouseY > 0 && mouseY < 40) { //VS
    setStatus("VS");
  } else if (mouseX > 150 && mouseX < 280 && mouseY > 0 && mouseY < 40) { //+
    setStatus("PLUS");

  }
}


function keyPressed() {
  if (keyCode == 32) {
    // SPACE


  }



  return false;
}