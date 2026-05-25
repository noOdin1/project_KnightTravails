/* knightTravails.js */

// This is a representation of the chessboard,
//  the 0's are the white squares, and the 1's
//   are the black squares. This can provide a
//    check on the knight's movement, because every
//     time the knight moves it switches from white
//      to black square and vice-versa.

let chessboard = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
];

const board = {
  // Takes in 2 [2x1] arrays, first the starting position
  //  the second argument is the destination position
  knightMoves: (currentArray, destArray) => {
    console.dir(currentArray);
    console.dir(destArray);
    // Determine the vertical direction, up or down that
    //  this knight should take
    let vertDir =
      currentArray[0] == destArray[0]
        ? "same row"
        : currentArray[0] > destArray[0]
          ? "going down"
          : "going up";
    let horizDir =
      currentArray[1] == destArray[1]
        ? "same column"
        : currentArray[1] > destArray[1]
          ? "going left"
          : "going right";
    console.log("Vertical direction: " + vertDir);
    console.log("Horizontal direction: " + horizDir);
  },
};

export { board };
