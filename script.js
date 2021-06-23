var imgs = [];
var d = -1;
let img;
// ['./assets/bird.png', './assets/cat1.png', './assets/cat2.png', './assets/dog.png',
// './assets/dolphin.png', './assets/elephant.png', './assets/giraffe.png', './assets/hedgehog.png',
// './assets/octopus.png', './assets/otter.png', './assets/owl.png', './assets/penguin.png',
// './assets/pig.png', './assets/turtle.png', './assets/whale.png']
function preload(){
  for(var i = 0; i < 2; i++){
      imgs[i] = loadImage('./assets/cat' + (i+1) + '.png');
  }
  // for (var i = 1; i < 4; i++) {
  //   imgs[i] = loadImage("./assets/cat"+i+".png");
  // }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  //noStroke();
  if (mouseClicked()) {
    d++;
  }
  if(d = imgs.length+1){
    d = 0;
  }
  console.log(d);
  let rateNum = 5;
  if(frameCount % rateNum == 0){
    image(imgs[d], mouseX, mouseY);
  }
  // for (var i=0; i<5; i++) {
  //   image(imgs[i], mouseX, mouseY);
  // }

  // let rateNum = 3;
  // if(frameCount % rateNum == 0){
  //   let img = loadImage(imgList[frameCount/rateNum % imgList.length]);
  //   image(img, mouseX, mouseY, 50, 50);
}
