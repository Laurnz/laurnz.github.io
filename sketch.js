/*
So, this is an attempt to feed a p5js canvas (or buffer in my case)
to A-Frame and then put it on a plane.

At the moment I call toDataURL() and then pass that as
data....which can't be the best way, but it does seem snappy.

Not worked out if you can handle mouseEvents yet. Not likely. 
I mean, how would you even work out mouseX (on an angled sketch a-entity)?

Tom Smith.

*/
// Buffer stuff
let x = 0;
let buffer;
let w = 1300;
let h = 1860;

// Own stuff

let img;
let img2;
let img3;
let img4;
let counter = 1;
let frameRateCounter = 60;
let imageCounter = 0;
let bg_left;
let myFont;
const articleOne = "In 2020, Europe witnessed a staggering number of femicides with 1215 cases being reported. The term femicide refers to the killing of a woman or girl by a man, simply because of her gender. This is a shocking statistic and highlights the need for urgent action to prevent such heinous crimes from happening.\n\nThe pandemic and subsequent lockdowns are believed to have contributed to a rise in domestic violence incidents and femicides worldwide. This has brought the issue of gender-based violence to the forefront of discussions on public safety and women's rights. \n\nEuropean governments and non-governmental organizations (NGOs) are working to address the issue through various means...";

const articleTwo = "In a shocking turn of events, Russia has reportedly invaded    [               ], causing neighboring countries to take action to protect their own borders. \n[                         ] was bombed yesterday at 4:21am, 441 civilians were killed. As a result, several countries have closed their borders, leaving many refugees from [               ] stranded and in need of assistance. \n\nHowever, the response from some political leaders has been less than sympathetic. In a statement released earlier today, the Minister of a neighboring country stated that they are not responsible for the refugees and that they should stay in their own country.";
const austria = "Austria";
const germany = "Germany";
const croatia = "Croatia";
const graz = "Graz";
const split = "Split";
const braunschweig = "Braunschweig";


function preload(){
  buffer = createGraphics(w, h);  
  myFont = loadFont('assets/BodoniXT.ttf');
  bg = loadImage('/images/bg.png');
}

function setup() {
  canvas = createCanvas(w, h);//If you noCanvas() it doesn't work.
  canvas.hide();
  
  textFont(myFont);
  img = loadImage('/images/Drop.png');
  img2 = loadImage('/images/Drop2.png');
  img3 = loadImage('/images/Drop3.png');
  img4 = loadImage('/images/Drop4.png');

  buffer.background(bg);
  buffer.fill('#7f6148');

  buffer.textSize(70);
  buffer.text("1215 femicides in 2020!", -450, 50+450, 700);

  buffer.textSize(50);
  buffer.text(articleOne, -450,200+450, 700);

  buffer.fill('#7f6148');
  buffer.textSize(50);
  let d = buffer.day();
  buffer.text("New York, May" + " " + d + " 2023", 50, 300, 500);
  buffer.textSize(70);
  buffer.text("Russian Invasion last night!", 50+400, 50+450, 700);
  buffer.textSize(50);
  buffer.text(articleTwo, 50+400,300+400, 700);

  buffer.fill(255, 0, 0);
  buffer.text(croatia, 500-5,830, 400);
  buffer.text(croatia, 785, 1330, 400);
  buffer.text(split, 570, 1015, 400);
  buffer.text("441", 907, 1075, 400);
  buffer.fill('#7f6148');

  frameRate(frameRateCounter);
  
}


function draw(){
    
    var randomX = 0;
    var randomY = 0;
    if(counter < 700) {
      while((randomY == 0 && randomX == 0) || (randomX > 400 && randomX < 1100) && (randomY > 600 && randomY < 1500)) {
        randomX = random(50, width-50);
        randomY = random(20, height-80);
      }
    } else {
        randomX = random(50, width-50);
        randomY = random(20, height-80);
    }
  
  
    if(counter <= 180) {
      if(counter % 60 === 0) {
         if(imageCounter % 4 == 0) {
          buffer.image(img, randomX-150, randomY-100);
        } else if(counter % 4 == 1) {
          buffer.image(img2, randomX-150, randomY-100);
        } else if(counter % 4 == 2) {
          buffer.image(img3, randomX-150, randomY-100);
        } else {
          buffer.image(img4, randomX-150, randomY-100);
        }
        imageCounter++;
      } 
    } else if (counter <= 270) {
      if(counter % 30 === 0) {
        if(imageCounter % 4 == 0) {
          buffer.image(img, randomX-150, randomY-100);
        } else if(counter % 4 == 1) {
          buffer.image(img2, randomX-150, randomY-100);
        } else if(counter % 4 == 2) {
          buffer.image(img3, randomX-150, randomY-100);
        } else {
          buffer.image(img4, randomX-150, randomY-100);
        }
        imageCounter++;
      }
    }else if (counter <= 450) {
      if(counter % 20 === 0) {
        if(imageCounter % 4 == 0) {
          buffer.image(img, randomX-150, randomY-100);
        } else if(counter % 4 == 1) {
          buffer.image(img2, randomX-150, randomY-100);
        } else if(counter % 4 == 2) {
          buffer.image(img3, randomX-150, randomY-100);
        } else {
          buffer.image(img4, randomX-150, randomY-100);
        }
        imageCounter++;
      }
    } else if(counter <= 750) {
      if(counter % 10 === 0) {
        if(imageCounter % 4 == 0) {
          buffer.image(img, randomX-150, randomY-100);
        } else if(counter % 4 == 1) {
          buffer.image(img2, randomX-150, randomY-100);
        } else if(counter % 4 == 2) {
          buffer.image(img3, randomX-150, randomY-100);
        } else {
          buffer.image(img4, randomX-150, randomY-100);
        }
        imageCounter++;
      }
    } else if(imageCounter < 442) {
      if(imageCounter % 4 == 0) {
        buffer.image(img, randomX-150, randomY-100);
        } else if(counter % 4 == 1) {
          buffer.image(img2, randomX-150, randomY-100);
        } else if(counter % 4 == 2) {
          buffer.image(img3, randomX-150, randomY-100);
        } else {
          buffer.image(img4, randomX-150, randomY-100);
        }
        imageCounter++;
    } else {
      buffer.textSize(150);
      buffer.fill(255);
      buffer.text("441 killed ...", 100, 500, 800);
      buffer.textSize(130);
      buffer.text("...441 drops of blood", 480, 1600, 900);
    }
    
    if(counter % 120 < 60) {
      buffer.fill(255, 0, 0);
    }
    buffer.text("441", 907, 1075, 400);
  
    buffer.noStroke();
    buffer.fill(237,220,188);
    buffer.rect(465, 790, 195, 55);
    buffer.rect(770, 1280, 196, 65);
    buffer.rect(470, 980, 320, 55);
    buffer.fill(255, 0, 0);
  
    if(counter % 180 < 60) {
      buffer.text(austria,500-5,830, 500);
      buffer.text(austria, 785,1330, 400);
      buffer.text(graz, 560, 1015, 400);
    } else if(counter % 180 < 120) {
      buffer.text(germany, 500-30-5,830, 400);
      buffer.text(germany, 800-30,1330, 400);
      buffer.text(braunschweig, 480, 1015, 400);
    } else {
      buffer.text(croatia, 500-5,830, 400);
      buffer.text(croatia, 785,1330, 400);
      buffer.text(split, 570, 1015, 400);
    }
    buffer.fill(127,97,72);
  
  
    counter++;

  // A-FRAME SETUP
  let data =  buffer.drawingContext.canvas.toDataURL();
  let myPlane = document.getElementById('myPlane');
  myPlane.setAttribute("material", "src", `url(${data});`);
  myPlane.setAttribute("material", "side", "double");
  
  let r = map(x, 0, width,0, 360);
  myPlane.setAttribute("rotation", "0" + " 0");
  myPlane.setAttribute('position', { x: 0, y: 1, z: -1 });
  
}





