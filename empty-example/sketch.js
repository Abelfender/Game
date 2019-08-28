var ball={
  speedx:13,
  speedy:10,
  x:325,
  y:325
};
let diff;
function setup() {
  //put the initial conditions here
  createCanvas(1500,750);


}

function draw() {
  // drawing code
  background(200);
  ini();
  move();
  bounce();
  plank();
  collision();
}
function ini(){
  // to draw the ball
  noStroke();
  fill(200,0,0);
  ellipse(ball.x,ball.y,30,30);
}
function move(){
  ball.x+=ball.speedx;
  ball.y+=ball.speedy;
}
function bounce(){
  if (ball.y<0){
  // checking the top boundaries
   ball.speedy=-1*ball.speedy;
  }
  if(ball.x>width || ball.x<0){
    // checking the horizontal boundaries
   ball.speedx=-1*ball.speedx;
  }


}
function plank(){
  rect(mouseX,740,150,10);
}
function collision(){
  // to check if the x coordinate of ball is within the plank
  if (ball.x>mouseX && ball.x<mouseX+150){


    bounceX();
    // bouncer();
  }
  else if(ball.y>height){
    //starting over(game over)
    ball.x=750,ball.y=325;
  }
}
function bounceX(){

  if(ball.y>height){
   ball.speedy=-1*ball.speedy;

 }

}
// function bouncer(){
//   diff = ball.x-mouseX;
//   if(diff<75){
//     for(i=0;i<75;i=i+5){
//       if(diff<i && diff>-5){
//         bounceXL(i);
//       }
//     }
//   }
//     if(diff<155 && diff>=75){
//       for(i=75;i<75;i=i+5){
//         if(diff<i && diff>-5){
//           bounceXR(i);
//         }
//       }
//   }
// }
//
// function bounceXL(i){
//   ball.speedx=-1*((15-i)/5);
//
// }
// function bounceXR(i){
//   ball.speedx=(i-15)/5-1;
// }
// function bouncer(){
//   diff=ball.x-mouseX;
//   if (diff<=50 && ball.y==740){
//     ball.speedx=-10;
//     // bounceX();
//   }
//   else if(diff>50 && diff<=100 && ball.y==740){
//     ball.speedx=0;
//     // bounceX();
//   }
//   else if(ball.y==740){
//     ball.speedx=10;
//   }
// }
