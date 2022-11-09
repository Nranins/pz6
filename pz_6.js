let roadMines = [false, false, false, true, true, false, false, false, false, false];
let position = roadMines.indexOf();
let foundMine = false;

for ( let mine of roadMines ) {
    console.log( `Танк переместился на ${++position + 1}` );
    if (mine == true) {
        foundMine = true;
        console.log( 'Танк повреждён' );
        continue;
    }
}

console.log( foundMine ? 'Танк уничтожен' : 'Танк не уничтожен' ); 