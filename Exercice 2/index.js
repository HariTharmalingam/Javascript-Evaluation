'use strict'


/**
 * DrawBar
 * @constructor 
 * @param {object} el
 */
var DrawBar = function DrawBar(el) {
    this.el = document.querySelector(el);
    this.elSegment = document.createElement('div');
}
/**
 * render
 */
DrawBar.prototype.render = function () {
    this.el.appendChild(this.renderBarre(function () {
        this.loading();
    }.bind(this)));
}
DrawBar.prototype.loading = function () {
    setInterval(function () {
        this.elSegment.style.width = this.elSegment.dataset.progress + '%';
        this.elSegment.dataset.progress = parseInt(this.elSegment.dataset.progress) + 1;
    }.bind(this), 500);
}
DrawBar.prototype.renderBarre = function (callback) {
    var bar = document.createElement('div');

    bar.style.background = 'red';
    bar.style.height = '30px';
    bar.style.width = '100%';
    this.elSegment.style.background = 'green';
    this.elSegment.style.height = '30px';
    this.elSegment.style.width = '0%';
    this.elSegment.setAttribute('data-progress', '0');
    bar.appendChild(this.elSegment);
    callback();
    return bar;
}
var drawBar = new DrawBar('.toto');
drawBar.render();