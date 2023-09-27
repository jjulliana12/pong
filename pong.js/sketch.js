let xBolinha = 300;
let yBolinha = 200;
let diametro = 60;
let vxBolinha = 6;
let raio = diametro / 2;
let vyBolinha = 6;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarBolinha();
    movimentarBolinha();
    paredeBolinha();
}

function criarBolinha() {

    circle(xBolinha, yBolinha, diametro);

}
function movimentarBolinha() {

    xBolinha = xBolinha + vxBolinha;
    yBolinha = yBolinha + vyBolinha;
}
function paredeBolinha() {

    if (xBolinha + raio > width || xBolinha - raio < 0)
        vxBolinha *= -1;

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1;
    }
}