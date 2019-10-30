var gameBoard = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

/**
 * checkShip
 *
 */
var MyBattleships = function(){
    this.squareSize = 50;
    this.ship1 = 0;
    this.ship2 = 0;
    this.ship3 = 0;
    this.ship4 = 0;
    this.ship5 = 0;
    this.counter = 0;

    this.array = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    this.gameBoardContainer = document.getElementById('gameboard');
    this.ships = document.getElementById('ships');
}

/**
 * renderGrid
 */
MyBattleships.prototype.renderGrid = function() {
    for (i = 0; i < 12; i++) {
        for (j = 0; j < 12; j++) {

            var square = document.createElement("div");
            this.gameBoardContainer.appendChild(square);

            square.id = this.array[i] + j;

            var topPosition = j * this.squareSize;
            var leftPosition = i * this.squareSize;

            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';

        }
    }
}

/**
 * render
 */
MyBattleships.prototype.render = function() {
    this.renderGrid();
    this.gameBoardContainer.addEventListener('click', this.fireTorpedo.bind(this), false);
}


/**
 * checkShip
 */
MyBattleships.prototype.checkShip = function(found) {
    if(found === 1){
        this.ship1++;
        if(this.ship1 === 2){
            var torpilleur = document.querySelector('#torpilleur').classList.add('sank');
            this.counter++;
        }
    }

    if(found === 2){
        this.ship2++;
        if(this.ship2 === 3){
            var torpilleur = document.querySelector('#contreTorpilleur').classList.add('sank');
            this.counter++;
        }
    }

    if(found === 3){
        this.ship3++;
        if(this.ship3 === 4){
            var torpilleur = document.querySelector('#croiseur').classList.add('sank');
            this.counter++;
        }
    }

    if(found === 4){
        this.ship4++;
        if(this.ship4 === 5){
            var torpilleur = document.querySelector('#porteAvion1').classList.add('sank');
            this.counter++;
        }
    }

    if(found === 5){
        this.ship5++;
        if(this.ship5 === 5){
            var torpilleur = document.querySelector('#porteAvion2').classList.add('sank');
            this.counter++;
        }
    }
}

/**
 * fireTorpedo
 */
MyBattleships.prototype.fireTorpedo = function(found) {

    if (found.target !== found.currentTarget) {

        var row = parseInt(found.target.id.substring(1,3));
        var col = found.target.id.charCodeAt(0)-65;

        if (gameBoard[row][col] === 0) {
            found.target.style.background = 'blue';

            gameBoard[row][col] = 0;

        } else if (gameBoard[row][col] != 0) {
            found.target.style.background = 'red';

            this.checkShip(gameBoard[row][col]);

            gameBoard[row][col] = 8;

            if (this.counter === 5) {
                alert("Gagné");
                window.location.reload();
            }

        }
    }
    found.stopPropagation();
}

var myBattleships = new MyBattleships();
myBattleships.render();

