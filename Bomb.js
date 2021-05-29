class Bomb{
    constructor(x,y){
        this.x= x;
        this.y = y;
        this.active = true;

    }
    show(){
        fill(149,193,31);
        noStroke();
        rect((this.x)+3,(this.y)-3,3,8);
        this.move();
        /*
        for(let i = 0; i < this.bullet.length ; i ++){
            this.bullet[i].show();
            this.removeInactiveBombs();
        }
        */
    }
    move(){
         this.y--;
         if(this.x > width){
             this.active = false;
         }
    }
    
    isActive(){
        return this.active
    }

 


   

}