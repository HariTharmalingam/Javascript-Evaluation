'use strict'

/**
 * MyMorpionXO
 * @constructor
 * @param {}
 * return tic tac toe game
 */
var MyMorpionXO = function MyMorpionXO(){
    window.addEventListener('load', function(){
        this.cases = document.querySelectorAll('.case');
        this.container = document.getElementById('container');
        this.score = document.getElementsByTagName('div')[0];
        this.scoreX = score.querySelector('.X');
        this.score0 = score.querySelector('.O');
        this.compt = 0;
        this.player = ['X','O'];
        this.counterX = 0;
        this.counter0 = 0;

    });
}

/**
 * render
 */
MyMorpionXO.prototype.render = function(){
    this.buttonrender();
}

/**
 * game
 * @param{button}
 */
MyMorpionXO.prototype.game = function(el){

    el.addEventListener('click', function() {

        if (el.innerHTML.length === 0){
            el.innerHTML = player[compt % 2];
            compt++;
            this.checkWinner();
        }
    }.bind(this));

}

/**
 * checkWinner
 * @param{button}
 * @param{compt} number
 * @param{player} array
 */
MyMorpionXO.prototype.checkWinner = function(){

    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        this.winner(cases[0]);

    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        this.winner(cases[3]);

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        this.winner(cases[6]);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        this.winner(cases[0]);

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        this.winner(cases[1]);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        this.winner(cases[2]);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        this.winner(cases[0]);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        this.winner(cases[2]);

    } else if (compt === 9) {
        alert('Egalité');
        this.reloadGame();
    }
};


MyMorpionXO.prototype.winner = function(_scores){
    if(_scores.innerHTML === 'X'){
        counterX++;
        scoreX.innerHTML = counterX;
        if(counterX === 3){
            alert('X a gagné la partie !');
            window.location.reload();
        }
    }
    else{
        counterO++;
        score0.innerHTML = counterO;
        if(counterO === 3) {
            alert('O a gagné la partie !')
            window.location.reload();
        }
    }
    this.reloadGame();
}

MyMorpionXO.prototype.reloadGame = function(){
    cases.forEach(cell => {
        cell.innerHTML = '';
    });
    compt = 0;
}

/**
 * buttonrender
 */
MyMorpionXO.prototype.buttonrender = function(){
    var elBody = document.querySelector('body');
    var elDiv = document.createElement('div');

    for (var i = 0; i < 3; i++){
        var elDiv = document.createElement('div');
        elDiv.setAttribute('id', 'container');
        for(var j = 0; j < 3; j++) {
            var elBut = document.createElement('div');
            this.game(elBut);

            elDiv.appendChild(elBut);

            elBut.style.padding = '70px';
            elBut.style.borderRadius = '10px';
            elBut.style.cursor = 'pointer';

            elBut.setAttribute('class', 'case');
        }
        elBody.appendChild(elDiv);

        elDiv.style.display = 'flex';
        elDiv.style.justifyContent = 'center';
    }
}

var myMorpionXO = new MyMorpionXO();
myMorpionXO.render();