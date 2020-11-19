// https://www.codingame.com/ide/puzzle/power-of-thor-episode-1
// Michał Ptok

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let thorX = initialTx;
let thorY = initialTy;

while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let orientation = "";

    if (thorY > lightY) {
        orientation += "N";
        thorY--;
    } else if (thorY < lightY) {
        orientation += "S";
        thorY++;
    }

    if (thorX > lightX) {
        orientation += "W";
        thorX--;
    } else if (thorX < lightX) {
        orientation += "E";
        thorX++;
    }

    console.log(orientation);

}
