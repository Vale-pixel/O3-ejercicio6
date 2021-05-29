let shooter;
let aliens = [];
//let aliens;
//let bullet;

function setup() {
  createCanvas(500, 500);
  shooter = new Shooter();
  alien = new Alien();
  // bullet = new Bomb();
  // alien = new Alien();


  let dx = 65;
  let dy = 80 / 2;

  for (let i = 0; i < 7; i++) {
    aliens.push(new Alien(dx, dy));
    dx = (dx + 100);
    if (dx >= 440) {
      dx = 115;
      dy = 100;
    }
  }
  //console.log(alien);

}
//console.log(alien);




function draw() {
  background(41, 35, 92);
  //mostrar el disparador
  shooter.show();



  //arreglo de aliens
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].body();
    for (let index = 0; index < shooter.getBullets().length; index++) {
      let bulletX = shooter.getBullets()[index].x; // obtenemosX
      let bulletY = shooter.getBullets()[index].y; // obtenemosY
      if (aliens[i].verifyCaboom(bulletX,bulletY)){ // verificamos el contacto
        aliens.splice(i, 1); // eliminamos
        break; // finalizamos el ciclo
      }
    }
  }




  /*
  if(alien[i].disapear(bullet.x, bullet.y)){
  alien.splice(i, 1);
  }
  //console.log(bullet);
  /*
  for (let i = 0; i < alien.length; i++){
      alien[i].body();
  }
  */

}

function mousePressed() {
  //disparar al hacer click
  shooter.shoot();

}

function keyPressed() {
  switch (key) {
    case 'a':
      shooter.move('LEFT');
      break;
    case 'd':
      shooter.move('RIGHT');
      break;

  }
}