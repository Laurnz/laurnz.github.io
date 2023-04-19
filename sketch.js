

    let img;
    let buffer;
    let vid;
    let w = 1300
    let h = 1860
    let flag = true;

    function preload(){
        myFont = loadFont('assets/BodoniXT.ttf');
        bg = loadImage('/images/bg.png');
        buffer = createGraphics(w, h)  
        
    }

    function setup() {
      canvas = createCanvas(w, h)//If you noCanvas() it doesn't work.
      canvas.hide()
      
      frameRate(30);
        

    }
    

    function draw() {
      buffer.background("white")
      vid = createVideo("vid.mp4")
        

        // A-FRAME SETUP
        let data =  buffer.drawingContext.canvas.toDataURL()
        let myPlane = document.getElementById('myPlane')
        myPlane.setAttribute("material", "src", `url(${data});`);
        myPlane.setAttribute("material", "side", "double");
        myPlane.setAttribute("rotation", "0" + " 0");
        myPlane.setAttribute('position', { x: 0, y: 1, z: -1 });
        /*
        vid = createVideo("vid.mp4");
        vid.autoplay();
        vid.volume(0);
        vid.speed(1);
        flag = false;
        */
    }  


