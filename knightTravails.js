/* knightTravails.js */

// This is a representation of the mapBoard,
//  the even numbered suqares are the white squares,
//   and the odd numbered squares are the black squares.
//    This can provide a check on the knight's movement, because every
//      time the knight moves it switches from white
//       to black square and vice-versa.

let mapBoard = [
  [72, 73, 74, 75, 76, 77, 78, 79],
  [61, 62, 63, 64, 65, 66, 67, 68],
  [50, 51, 52, 53, 54, 55, 56, 57],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [30, 31, 32, 33, 34, 35, 36, 37],
  [21, 22, 23, 24, 25, 26, 27, 28],
  [10, 11, 12, 13, 14, 15, 16, 17],
  [1, 2, 3, 4, 5, 6, 7, 8],
];

let dirTranslation = {
  NNE: [1, 2],
  NEE: [2, 1],
  SEE: [2, -1],
  SSE: [1, -2],
  SSW: [-1, -2],
  SWW: [-2, -1],
  NWW: [-2, 1],
  NNW: [-1, 2],
};

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
  getAngle: (pos1, pos2) => {
    if (
      pos1 === undefined ||
      pos2 === undefined ||
      !Array.isArray(pos1) ||
      !Array.isArray(pos2)
    ) {
      return undefined;
    }
    let quadrant = 0;
    let yDiff = pos2[0] - pos1[0];
    let xDiff = pos2[1] - pos1[1];
    let hyp = Math.sqrt(xDiff ** 2 + yDiff ** 2);
    // format [y,x]
    // get arcsine of opposite / hypotenuse, convert to degress and get the
    //  absolute value
    let angleInDegrees = Math.asin(yDiff / hyp) * (180 / Math.PI);
    if (xDiff < 0 && yDiff < 0) {
      quadrant = 180;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff > 0 && yDiff > 0) {
      quadrant = -360;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff > 0 && yDiff < 0) {
      quadrant = 0;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff < 0 && yDiff > 0) {
      quadrant = 90;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }



  // Boundary checking
  validPos: (array) => {
    if (!Array.isArray(array)) {
      return undefined;
    }
    let valid = false;
    valid =
      array[0] > mapBoard[0].length - 1 || array[0] < 0
        ? false
        : array[1] > mapBoard.length - 1 || array[1] < 0
          ? false
          : true;
    return valid;
  },

  sameValues: (arr1, arr2) => {
    if (arr1 === undefined || arr2 === undefined) {
      return undefined;
    }
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return undefined;
    }
    if (arr1.length != arr2.length) {
      return false;
    }
    let res = true;
    arr1.map((x, idx) => {
      if (x != arr2[idx]) {
        res = false;
      }
    });
    return res;
    // arr1.map((x, idx) => (x == arr2[idx] ? true : false));
  },

};

export { board, dirTranslation, mapBoard };
