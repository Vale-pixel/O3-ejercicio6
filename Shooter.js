class Shooter{
    constructor(){
        this.x = 245;
        this.y = 409;
        this.bullet = [];
        this.alien = [];

    }
    show(){

        fill(255);
        noStroke();
        //rectMode(CENTER);
        rect(this.x,this.y,10,10);
        //body
        
        fill(0);
        noStroke();
        rect((this.x)-5,(this.y)+10,20,47);
        rect((this.x)-2,(this.y)+57,14,10);

        for(let i = 0; i < this.bullet.length ; i ++){
            this.bullet[i].show();
            this.removeInactiveBombs();
            this.removeAliens();
        }
        
    }    

  

    shoot(){
            this.bullet.push(new Bomb(this.x,this.y));
        
    }
   
    removeInactiveBombs(){
        for(let i = 0; i < this.bullet.lenght ; i ++){
            if(!this.bullet[i].isActive()){
                //remove
                this.bullet.splice(i,1);
                break;
                

            }
        }    

    }

     move(dir){
        switch(dir){
            case "LEFT":
                this.x -= 5;
                break;
            case "RIGHT":
                this.x += 5;
                break;

        }

    }

    bringAlien(){
        this.alien.push(new Alien(dx, dy));
    }

    removeAliens(){
        for(let i = 0; i < this.alien.lenght ; i ++){
            if(!this.alien[i].isDead()){
                //remove
                this.alien.splice(i,1);
                break;
                
    
            }
        }    
        
    
    }
}