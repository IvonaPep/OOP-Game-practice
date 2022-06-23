class Game {
    constructor(){
        this.time = 0;
        this.player = null;
        this.obstacleArr = [];     //will store instances of Obstacle
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();


        setInterval(() => {

            this.obstacleArr.forEach((obstacleInstance) => {
                obstacleInstance.moveDown();
            });
            if(this.time % 60 === 0){
                const newObstacle = new Obstacle();
                this.obstacleArr.push(newObstacle);
            }
            this.time++;
        }, 50);
                 
       
    }
        attachEventListeners(){
            document.addEventListener("keydown", (event) => {
                if(event.key === "ArrowLeft"){
                    this.player.moveLeft();
                } else if(event.key === "ArrowRight"){
                    this.player.moveRight();
                }
            });
        }
    }

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");
        this.domElement.id = "player";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }

    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor(){
        this.positionX = 45;
        this.positionY = 90;
        this.domElement = null;
        this.createDomElement();
    }
    createDomElement(){
        this.domElement = document.createElement("div");
        this.domElement.className = "obstacle";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const game = new Game();
game.start();

