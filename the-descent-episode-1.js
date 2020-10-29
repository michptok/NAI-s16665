// https://www.codingame.com/training/easy/the-descent
// Michał Ptok

while (true) {
    let highestM = 0;
    let target = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH >= highestM) {
            highestM = mountainH;
            target = i;
        }
    }
    console.log(target);
}
