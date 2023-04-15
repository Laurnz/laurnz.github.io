let img;
let counter = 1;
let frameRateCounter = 1;

let articleTwo;
let placeholderAustria = "Test";

function setup() {
  createCanvas(325, 465);
  textWrap(WORD);
  fill(0);
  text(articleOne, 0, 10, 325);
  fill(255, 0, 0);
  text(redWord, 78, 25, 325);
  fill(0);
  
  fill(0);
  text(articleTwo, 0, 300, 325);
  fill(255, 0, 0);
  text(placeholderAustria, 0, 315, 325);
  fill(0);
  
  img = loadImage('/images/Drop.png');
  frameRate(frameRateCounter);
}



function draw() {
  background(255);
  articleTwo = `In a shocking turn of events, Russia has reportedly invaded ${placeholderAustria}, causing neighboring countries to take action to protect their own borders. As a result, several countries have closed their borders, leaving many refugees from Ukraine stranded and in need of assistance. \n\nHowever, the response from some political leaders has been less than sympathetic. In a statement released earlier today, the Minister of a neighboring country stated that they are not responsible for the refugees and that they should stay in their own country.`;
 frameRate(frameRateCounter);
  if(counter < 1215) {
    if(counter % 5 === 1) {
      frameRateCounter++;
      placeholderAustria = "Test ";
    } else {
      placeholderAustria = "Test2";
    }
    var circleX = random(width);
    var circleY = random(height);
    img.resize(60, 60);
    fill(255, 0, 0);
    //image(img, circleX-30, circleY-20);
    counter++;
  }
  fill(0);
  text(articleTwo, 0, 300, 325);
  fill(255, 0, 0);
  text(placeholderAustria, 0, 315, 325);
  fill(0);
  
  //image(img, 0, 0);
  
}

const articleOne = "In 2020, Europe witnessed a staggering number of femicides with 1215 cases being reported. The term femicide refers to the killing of a woman or girl by a man, simply because of her gender. This is a shocking statistic and highlights the need for urgent action to prevent such heinous crimes from happening.\n\nThe pandemic and subsequent lockdowns are believed to have contributed to a rise in domestic violence incidents and femicides worldwide. This has brought the issue of gender-based violence to the forefront of discussions on public safety and women's rights. \n\nEuropean governments and non-governmental organizations (NGOs) are working to address the issue through various means...";
const redWord = "1215 cases";
