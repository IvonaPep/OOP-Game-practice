class Game {
    constructor(){
        this.player = null;
    }
    start(){
        this.player = new Player();
        this. attachEventListeners();
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



const game = new Game();
game.start();

