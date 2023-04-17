/*
var sketch1 = function(p) {
    let img;
    let counter = 1;
    let frameRateCounter = 1;
    let bg_left;
    let myFont;
    const articleOne = "In 2020, Europe witnessed a staggering number of femicides with 1215 cases being reported. The term femicide refers to the killing of a woman or girl by a man, simply because of her gender. This is a shocking statistic and highlights the need for urgent action to prevent such heinous crimes from happening.\n\nThe pandemic and subsequent lockdowns are believed to have contributed to a rise in domestic violence incidents and femicides worldwide. This has brought the issue of gender-based violence to the forefront of discussions on public safety and women's rights. \n\nEuropean governments and non-governmental organizations (NGOs) are working to address the issue through various means...";

    p.preload = function(){
        myFont = p.loadFont('assets/BodoniXT.ttf');
        bg_left = p.loadImage('/images/bg_left.png');
        
    }

    p.setup = function() {
        const firstCanvas = p.createCanvas(650, 1860);
        firstCanvas.parent("firstCanvas");
        p.textFont(myFont);
        img = p.loadImage('/images/Drop.png');
        
        p.background(bg_left);
        p.fill('#7f6148');


        p.textSize(50);
        p.text("1215 femicides in 2020!", 50, 50+450, 500);
       
        p.textSize(36);
        p.text(articleOne, 50,200+450, 500);

        p.frameRate(frameRateCounter);
    }
    

    p.draw = function() {
        p.frameRate(frameRateCounter);
        
        if(counter < 1215) {
            if(counter > 800) {
                frameRateCounter++;
            }
            if(counter >= 3 && counter % 3 === 1) {
                frameRateCounter++;
            }
            var randomX = p.random(p.width);
            var randomY = p.random(p.height);
            //img.resize(300, 300);
            p.image(img, randomX-200, randomY-100);
            
        } else if(counter >= 1215 && counter < 1218) {
            frameRateCounter = 1;
            p.textSize(80);
            p.fill(255);
            p.text("1215 drops of blood...", 100, 700, 500);
            p.fill('#7f6148');
        } else {
            counter = 0;
            frameRateCounter = 1;
            p.fill(127,97,72);
            p.background(bg_left);
            p.textSize(50);
            p.text("1215 femicides in 2020!", 50, 50+350, 400);
            p.textSize(30);
            p.text(articleOne, 50,200+350, 400);
            
        }
        
        counter++;
    }  
}

var sketch2 = function(p) {
    let bg_right;
    let myFont;
    const articleTwo = "In a shocking turn of events, Russia has reportedly invaded    [               ], causing neighboring countries to take action to protect their own borders. As a result, several countries have closed their borders, leaving many refugees from [               ] stranded and in need of assistance. \n\nHowever, the response from some political leaders has been less than sympathetic. In a statement released earlier today, the Minister of a neighboring country stated that they are not responsible for the refugees and that they should stay in their own country.";
    const austria = "Austria";
    const germany = "Germany";
    const croatia = "Croatia";
    let counter = 1;

    p.preload = function(){
        myFont = p.loadFont('assets/BodoniXT.ttf');
        bg_right = p.loadImage('/images/bg_right.png');
        
    }

    p.setup = function() {
        const secondCanvas = p.createCanvas(650, 1860);
        secondCanvas.parent("secondCanvas");
        p.textFont(myFont);
        p.background(bg_right);
        p.fill('#7f6148');
        p.textSize(50);
        p.text("Russian Invasion last night!", 50, 50+450, 500);
        p.textSize(36);
        p.text(articleTwo, 50,300+350, 500);
        p.frameRate(1);
      }
    
      p.draw = function() {
        p.background(bg_right);
        p.fill('#7f6148');
        p.textSize(50);
        p.text("Russian Invasion last night!", 50, 50+450, 500);
        p.textSize(36);
        p.text(articleTwo, 50,300+350, 500);
        if(counter % 3 === 1) {
            p.fill(255, 0, 0);
            p.text(austria,75,390+350, 500);
            p.text(austria, 375,970, 400);
        } else if(counter % 3 === 2) {
            p.fill(255, 0, 0);
            p.text(germany, 65,390+350, 400);
            p.text(germany, 375,970, 400);
        } else {
            p.fill(255, 0, 0);
            p.text(croatia, 65,390+350, 400);
            p.text(croatia, 375,970, 400);
        }
        p.fill(127,97,72);
        counter++;
      }
}

var myp5One = new p5(sketch1);
var myp5Pink = new p5(sketch2);
*/