

    let img;
    let myFont;
    let buffer;
    let w = 1300
    let h = 1860
    const articleOne = "In 2020, Europe witnessed a staggering number of femicides with 1215 cases being reported. The term femicide refers to the killing of a woman or girl by a man, simply because of her gender. This is a shocking statistic and highlights the need for urgent action to prevent such heinous crimes from happening.\n\nThe pandemic and subsequent lockdowns are believed to have contributed to a rise in domestic violence incidents and femicides worldwide. This has brought the issue of gender-based violence to the forefront of discussions on public safety and women's rights. \n\nEuropean governments and non-governmental organizations (NGOs) are working to address the issue through various means...";

    function preload(){
        myFont = loadFont('assets/BodoniXT.ttf');
        bg = loadImage('/images/bg.png');
        buffer = createGraphics(w, h)  
        
    }

    function setup() {
        firstCanvas = createCanvas(1300, 1860);
        firstCanvas.hide();
        buffer.textFont(myFont);

        frameRate(30);
        createCanvas(0, 0);
        
        

    }
    

    function draw() {
        
        // A-FRAME SETUP
        let data =  buffer.drawingContext.canvas.toDataURL()
        let myPlane = document.getElementById('myPlane')
        myPlane.setAttribute("material", "src", `url(${data});`);
        myPlane.setAttribute("material", "side", "double");
        
        let r = map(x, 0, width,0, 360)
        myPlane.setAttribute("rotation", "0" + " 0")
        myPlane.setAttribute('position', { x: 0, y: 1, z: -1 });

        vid = createVideo("vid.mp4");
        vid.volume(0);
        vid.autoplay();
        vid.speed(1);
    }  


