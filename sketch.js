/*
So, this is an attempt to feed a p5js canvas (or buffer in my case)
to A-Frame and then put it on a plane.

At the moment I call toDataURL() and then pass that as
data....which can't be the best way, but it does seem snappy.

Not worked out if you can handle mouseEvents yet. Not likely. 
I mean, how would you even work out mouseX (on an angled sketch a-entity)?

Tom Smith.

*/

let x = 0
let buffer
let w = 595
let h = 842


function preload(){
  buffer = createGraphics(w, h)  
}

function setup() {
  canvas = createCanvas(w, h)//If you noCanvas() it doesn't work.
  canvas.hide()
  frameRate(20)//slow it down a bit
  
  // Set up the buffer...
  //buffer.background("grey")
  

  //print(buffer)
 // buffer.background("grey")
 // buffer.fill("red")
 // buffer.circle(50, 50, 200)
 // buffer.fill("cyan")
 // buffer.text("Hello!", 50, 50)
  
  
  
}


function draw(){
  
  // HIER p5
  let h = hour();
  let m = minute();
  let s = second();

  buffer.background("white")
  buffer.fill(0,0,255);
  buffer.ellipse(mouseX,mouseY,200);
  buffer.textSize(90);
  buffer.text(h,200,200);
  buffer.text(m,200,400);
  buffer.text(s,200,600);



  // A-FRAME SETUP
  let data =  buffer.drawingContext.canvas.toDataURL()
  let myPlane = document.getElementById('myPlane')
  myPlane.setAttribute("material", "src", `url(${data});`);
  myPlane.setAttribute("material", "side", "double");
  
  let r = map(x, 0, width,0, 360)
  myPlane.setAttribute("rotation", "0" + " 0")
  myPlane.setAttribute('position', { x: 0, y: 1, z: -1 });
  
}





