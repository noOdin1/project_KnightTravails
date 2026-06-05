/* knightTravails.js */
import { LinkedList } from "./linked_list.js";
import { Tree } from "./binary_search_tree.js";

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
  NNE: [-2, 1],
  NEE: [-1, 2],
  SEE: [1, 2],
  SSE: [2, 1],
  SSW: [-2, -1],
  SWW: [-1, -2],
  NWW: [1, -2],
  NNW: [2, -1],
};

const board = {
  // Takes in 2 [2x1] arrays, first the starting position
  //  the second argument is the destination position
  knightMoves: (currentArray, destArray) => {
    // Determine the vertical direction, up or down that
    //  this knight should take
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

    if (yDiff == 0 && pos1[0] == 0 && pos1[1] < pos2[1]) {
      quadrant = 359;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (yDiff == 0 && pos1[0] == 0 && pos1[1] > pos2[1]) {
      quadrant = 181;
      // quadrant = 271;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (yDiff == 0 && pos1[0] == 7 && pos1[1] < pos2[1]) {
      quadrant = 1;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (yDiff == 0 && pos1[0] == 7 && pos1[1] > pos2[1]) {
      quadrant = 179;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }

    if (xDiff == 0 && pos1[1] == 0 && pos1[0] < pos2[0]) {
      quadrant = 271;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 0 && pos1[0] > pos2[0]) {
      quadrant = 89;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 7 && pos1[1] < pos2[1]) {
      quadrant = 269;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 7 && pos1[1] > pos2[1]) {
      quadrant = 91;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }

    // return [hyp, Math.abs(angleInDegrees + quadrant)];
    return [undefined, undefined];
  },

  dir: (curPos, destPos) => {
    // The Math required to determine if the current position is withing
    //  1 jump to the destPos
    // if (parseFloat(hyp.toFixed(3)) == 2.236) {
    //   console.log("magic distance found");
    // }
    // if (parseFloat(angleInDegrees.toFixed(3)) == 26.565) {
    //   console.log("magic angle found");
    // }
    if (
      curPos === undefined ||
      destPos === undefined ||
      !Array.isArray(curPos) ||
      !Array.isArray(destPos)
    ) {
      return undefined;
    }
    let [hyp, angleInDegrees] = board.getAngle(curPos, destPos);
    console.log(
      "curPos: [" +
        curPos +
        "], destPos: [" +
        destPos +
        "], hyp: " +
        hyp +
        ", angleInDegrees: " +
        angleInDegrees,
    );
    if (angleInDegrees >= 0 && angleInDegrees < 45) {
      return "NEE";
    }
    if (angleInDegrees >= 45 && angleInDegrees < 90) {
      return "NNE";
    }
    if (angleInDegrees >= 90 && angleInDegrees < 135) {
      return "NNW";
    }
    if (angleInDegrees >= 135 && angleInDegrees < 180) {
      return "NWW";
    }
    if (angleInDegrees >= 180 && angleInDegrees < 225) {
      return "SWW";
    }
    if (angleInDegrees >= 225 && angleInDegrees < 270) {
      return "SSW";
    }
    if (angleInDegrees >= 270 && angleInDegrees < 315) {
      return "SSE";
    }
    if (angleInDegrees >= 315 && angleInDegrees < 360) {
      return "SEE";
    }
  },

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

  movePos: (arr, knightMove) => {
    return arr.map((x, idx) => {
      console.log(
        "x: " +
          x +
          ", dirTranslation[knightMove][idx]: " +
          dirTranslation[knightMove][idx],
      );
      return x + dirTranslation[knightMove][idx];
    });
  },

};

export { board, dirTranslation, mapBoard };
