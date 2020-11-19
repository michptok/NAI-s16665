// https://www.codingame.com/ide/puzzle/mars-lander-episode-1
// Michał Ptok

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

while (true) {
    var inputs = readline().split(' ');
    var vSpeed = parseInt(inputs[3]);

    if (vSpeed <= -39) {
        console.log('0 4');
    } else {
        console.log("0 2");
    }
}
