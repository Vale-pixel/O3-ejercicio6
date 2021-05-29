class Alien {
constructor (x, y){
    this.x = x;
    this.y = y;
    this.dead = true;
    //122,270
}

body(){
    //body
    fill(227,6,19);
    noStroke();
    rect(this.x, this.y, 46, 30);

    fill(54, 169, 225);
    noStroke();
    //antennas
    rect(this.x + 34, this.y - 13, 6, 13 );
    rect(this.x + 6, this.y  - 13, 6, 13 );
    //claws
    rect(this.x - 6, this.y, 6, 18 );
    rect(this.x - 12, this.y + 12, 6, 18 );
    rect(this.x + 46, this.y, 6, 18 );
    rect(this.x + 52, this.y + 12, 6, 18 );
    //eyes
    rect(this.x + 11, this.y + 6, 6, 6 );
    rect(this.x + 29, this.y + 6, 6, 6 );

    rect(this.x + 11, this.y + 24, 24, 6);

    
}
cabum(x, y){
    if(x > this.x && x <(this.x + 46) &&
    y > this.y && y < this.y + 30){
        
        this.dead = false;
    }
  
}
isDead(){
    return this.dead
}
/*
validateShoot(, y){
    if(x > this.x ){

    }
}

disapear(dx,dy) {
    if(dist(this.x,this.y,dx,dy) < 3) { 
        return true;
  } else{
   return false;
 }
}
*/
/*
removeAlien(x, y){
    if(x > this.x && x <(this.x + 46) &&
    y > this.y && y < this.y + 30){
        return true;
    }
    return false;
}
*/



}