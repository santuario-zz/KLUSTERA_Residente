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
var sizeFont;

// Status
var STATUS;
var waitWordTime = 30;

// Data
var residenteSongs = ["tierra", "hermano"];
var calle13Songs = ["mundo", "universal"];
var calle13ResidenteSongs = ["podemos", "ser"];

var calle13ResidenteSongsCount = 0;
var calle13SongsCount = 0;
var residenteSongsCount = 0;

// Items
var items = [];
var itemsCount = 16;
var currentPosition;
var currentPositions = [];


//Perlin
var yoff = 0.0; // 2nd dimension of perlin noise
var r = 0.0;
var g = 0.0;
var b = 0.0;
var ymov = 0;
var touchPositionY = 0;
var startPoint = 0;
var _startReset = false;
var grayValue = 135;
var alphaText = 255;
var textSelect = "no";
var textY = 20;


//sound
var sound, amplitude;


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

  //Sound
  sound = loadSound("assets/music/El_Futuro_Es_Nuestro.mp3");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //touchPositionY = windowHeight/2;

  if (STATUS == "VS") {
    touchPositionY = windowHeight / 2;
  } else if (STATUS == "PLUS") {
    touchPositionY = windowHeight * 2;
  }

}


function setup() {

  createCanvas(displayWidth, displayHeight)
  initialize();

}

function draw() {

  drawPerlin();
  drawStatus();
  drawHeader();
  drawSong();

  //drawItems();
}



/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {

  initializePerlin();
  initializeStatus();
  initializeHeader();
  initializeMusic();
  //initializeItems();
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

  stroke(255);

  if (isInsideButtonVS(mouseX, mouseY)) { //VS
    line(10, 30, 145, 30);
  } else if (isInsideButtonPLUS(mouseX, mouseY)) { //+
    line(150, 30, 280, 30);

  }

}

function isInsideButtonVS(_x, _y) {
  var isInside = false;

  if (_x > 0 && _x < 150 && _y > 0 && _y < 40) {
    isInside = true;
  }

  return isInside;
}

function isInsideButtonPLUS(_x, _y) {
  var isInside = false;

  if (_x > 150 && _x < 280 && _y > 0 && _y < 40) {
    isInside = true;
  }

  return isInside;
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
    touchPositionY = (windowHeight / 2);

  } else if (_status == "PLUS") {
    STATUS = "PLUS";
    touchPositionY = (windowHeight * 2);

  }

}

function drawStatusVS() {
  //background(40, 47, 47);
  stroke(255);
  line(10, 30, 145, 30);
  //var correctionXS = (windowWidth / 2) - (backgroundImage.width / 2);
  //var correctionYS = (windowHeight / 2) - (backgroundImage.height / 2);
  noStroke();
  //fill(57, 172, 91);
  //rect(0, (windowHeight / 2), windowWidth, (windowHeight / 2));

  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  textFont(geoSmallFont);


  // textSize(48);
  textSize(sizeFont);


  if (frameCount % waitWordTime == 0) {
    calle13SongsCount++;
    residenteSongsCount++;
  }


  if (calle13SongsCount >= calle13Songs.length) {
    calle13SongsCount = 0;
  }

  if (residenteSongsCount >= residenteSongs.length) {
    residenteSongsCount = 0;
  }





  //Residente
  fill(255);
  text(residenteSongs[residenteSongsCount], (windowWidth / 2), (windowHeight / 4));
  //Callse 13
  fill(100);
  text(calle13Songs[calle13SongsCount], (windowWidth / 2), (3 * windowHeight / 4));



}


function drawStatusPLUS() {
  //background(28, 36, 76);
  stroke(255);
  line(150, 30, 280, 30);

  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  //Text
  textFont(geoSmallFont);
  //textSize(48);
  textSize(sizeFont);


  /*
  for (var i = 0; i < calle13ResidenteSongs.length; i++) {
    print(calle13Residente Songs[i]);
  }*/


  if (frameCount % waitWordTime == 0) {
    calle13ResidenteSongsCount++;
  }


  if (calle13ResidenteSongsCount >= calle13ResidenteSongs.length) {
    calle13ResidenteSongsCount = 0;
  }

  //print(calle13ResidenteSongsCount);

  text(calle13ResidenteSongs[calle13ResidenteSongsCount], (windowWidth / 2), (windowHeight / 2));



}


/*
 *****************************************
 *****************************************
 * ITEMS METHODS
 *****************************************
 *****************************************
 */


function initializeItems() {

  items.length = 0;

  for (var i = 0; i < 1; i++) {

    var itemsTMP = [];

    for (var j = 0; j < 12; j++) {

      var s = floor(random(2, 10));
      //itemsTMP.push(new Item(windowWidth / 2 - lines[i][0].getNum("x"), windowHeight / 2 - lines[i][0].getNum("y")));
      itemsTMP.push(new Item(floor(random(s, windowWidth - s)), floor(random(s, windowHeight - s)), s, 0));
      //itemsTMP.push(new Item(currentPositions[i].x,currentPositions[i].y));

    }

    items[i] = itemsTMP;


  }


  // print(items[0].length);



}


function drawItems() {


  for (var k = 0; k < 1; k++) {

    for (var i = 0; i < items[k].length; i++) {
      items[k][i].targetPosition = createVector(mouseX, mouseY);
      items[k][i].update();
      items[k][i].display();
      items[k][i].checkBoundaryCollision();
      for (var j = 0; j < items[k].length; j++) {
        items[k][j].checkCollision(items[k][i]);
      }
    }
  }


}


/*
 *****************************************
 *****************************************
 * PERLIN NOISE METHODS
 *****************************************
 *****************************************
 */

function initializePerlin() {
  startPoint = displayHeight / 2;
  touchPositionY = startPoint;
}


function drawPerlin() {
  r = map(touchPositionY, 0, displayHeight, 0, 100);
  g = map(touchPositionY, 0, displayHeight, 100, 0);
  if (r <= 50) {
    b = map(r, 0, 50, 0, 50);

  } else if (g <= 50) {
    b = map(g, 0, 50, 0, 50);
  }


  if (touchPositionY <= displayHeight / 2) {
    textSelect = "sí︎";
    alphaText = map(touchPositionY, 0, displayHeight / 2, 255, 0);
  } else {
    textSelect = "no";
    alphaText = map(touchPositionY, displayHeight, displayHeight / 2, 255, 0);

  }


  var colorCenter = map(displayHeight / 2, 0, displayHeight, 100, 0);
  background(grayValue + r, grayValue + g, grayValue + b);
  //print(r + " " + g +  " " + b);
  fill(255);
  // We are going to draw a polygon out of the wave points
  noStroke();

  if (_startReset == true) {


    if (touchPositionY > startPoint) {
      touchPositionY--;
    } else if (touchPositionY < startPoint) {
      touchPositionY++;
    } else if (touchPositionY == startPoint) {
      touchPositionY = startPoint;
      _startReset = false;

    }




  }

  beginShape();

  var xoff = 0; // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= displayWidth; x += 10) {
    // Calculate a y value according to noise, map to 

    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, 200, touchPositionY);

    // Option #2: 1D Noise
    //  var y = map(noise(xoff), 0, 1, 200,300);
    // print(x);
    // Set the vertex
    if (x == 10) {
      textY = y - 70;
    }

    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(displayWidth, displayHeight);
  vertex(0, displayHeight);
  endShape(CLOSE);

  //textAlign(CENTER);

  //fill(255, 255, 255, alphaText);
  //textSize(34);
  //text(textSelect, 20, textY, 50, 50);
}


function initializeMusic() {
  smooth();
  sound.play();
  amplitude = new p5.Amplitude();
  //blendMode(ADD);
}

function drawSong() {

  var level = amplitude.getLevel();
  sizeFont = map(level, 0, 1, 5, 250);
  //background(0);
  var col = map(level, 0, 1, 0, 255);
  //stroke(col, (col + random(500)) % 255, (col + random(500)) % 255, 10);
  stroke(255);
  strokeWeight(map(level, 0, 1, 0, 20));
  var x = map(level, 0, 1, random(displayWidth), displayWidth);
  var y = map(level, 0, 1, random(displayWidth), displayWidth);
  line(displayWidth / 2, textY, x / 2, y / 2);
  line(displayWidth / 2, textY, x * 2, random(0, y));
  line(displayWidth / 2, textY, x / 4, y / 4);
  line(displayWidth / 2, textY, x * 4, random(0, y));
  fill(255);
  var size = map(level, 0, 1, 0, 500);
  ellipse(displayWidth / 2, textY, size, size);
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


  if (isInsideButtonVS(mouseX, mouseY)) { //VS
    setStatus("VS");
  } else if (isInsideButtonPLUS(mouseX, mouseY)) { //+
    setStatus("PLUS");

  }
}

function mousePressed() {
  //touchPositionY = mouseY;
  _startReset = false;
  //fullscreen(true);
}

function mouseDragged() {
  //touchPositionY = mouseY;
  _startReset = false;
}

function mouseReleased() {
  _startReset = true;
}



function keyPressed() {
  if (keyCode == 32) {
    // SPACE


  }



  return false;
}