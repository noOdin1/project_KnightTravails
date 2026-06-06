/* knightTravails.js */
import { LinkedList } from "./linked_list.js";
import { Tree } from "./binary_search_tree.js";

// This is a representation of the mapBoard,
//  the even numbered suqares are the white squares,
//   and the odd numbered squares are the black squares.
//    This can provide a check on the knight's movement, because every
//      time the knight moves it switches from white
//       to black square and vice-versa.

// prettier-ignore
let mapBoard = [
  [ 72,  73,  74,  75,  76,  77,  78,  79],

  [ 61,  62,  63,  64,  65,  66,  67,  68],
  
  [ 50,  51,  52,  53,  54,  55,  56,  57],
  
  [ 41,  42,  43,  44,  45,  46,  47,  48],
  
  [ 30,  31,  32,  33,  34,  35,  36,  37],
  
  [ 21,  22,  23,  24,  25,  26,  27,  28],
  
  [ 10,  11,  12,  13,  14,  15,  16,  17],

  [  1,   2,   3,   4,   5,   6,   7,   8],
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

function travellingKnight() {
  let bst = new Tree();

  function getAngle(pos1, pos2) {
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
    hyp = hyp.toFixed(3);
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
      quadrant = 269;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 0 && pos1[0] > pos2[0]) {
      quadrant = 89;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 7 && pos1[0] < pos2[0]) {
      quadrant = 91;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }
    if (xDiff == 0 && pos1[1] == 7 && pos1[0] > pos2[0]) {
      quadrant = 271;
      return [hyp, Math.abs(angleInDegrees + quadrant)];
    }

    return [hyp, undefined];
  }

  // Boundary checking
  function validPos(array) {
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
  }

  // compares the value of 2 arrays, arrays must be the same size
  const arrValComp = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return undefined;
    }
    if (arr1.length != arr2.length) {
      return undefined;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  };


  // Create a map of possible knight moves on every square
  function createKnightMovementMap() {
    let tmpArray = [];
    for (let y = mapBoard.length - 1; y > -1; y--) {
      for (let x = 0; x < mapBoard.length; x++) {
        let newList = new LinkedList();
        // This will be the first node on the Linked List
        newList.append(mapBoard[y][x]);
        Object.keys(dirTranslation).forEach((key) => {
          if (
            this.validPos([
              y - dirTranslation[key][0],
              x - dirTranslation[key][1],
            ])
          ) {
            newList.append([
              y - dirTranslation[key][0],
              x - dirTranslation[key][1],
            ]);
          }
        });
        tmpArray.push(newList);
      }
    }
    // NOTE: bst worked, new function introduced "buildTreeAlt()"
    bst.buildTreeAlt(tmpArray);
  }

  function printMappedMoves() {
    bst.prettyPrint();
  }

  function findPossibleMoveFor(num) {
    let tmpNode = bst.findAlt(num);

    let node = tmpNode.val.head();
    let res = [];
    node = node.nextNode;
    while (node != null) {
      res.push(node.val);
      node = node.nextNode;
    }
    return res;
  }

  function returnSquare(arr) {
    return mapBoard[arr[0]][arr[1]];
  }

  function returnArrayIndex(num) {
    let multiples = Math.floor(num / 10);
    let i = 0;
    for (; i < mapBoard.length - 1; i++) {
      if (mapBoard[7 - multiples][i] == num) {
        break;
      }
    }
    return [7 - multiples, i];
  }

  function isPosNew(array, movedPositions) {
    if (!Array.isArray(array)) {
      return undefined;
    }
    for (let i = 0; i < movedPositions.length; i++) {
      if (arrValComp(array, movedPositions[i])) {
        return false;
      }
    }

    return true;
  }

  function sortByDistance(arr, dest) {
    if (!Array.isArray(arr)) {
      return undefined;
    }
    let tmpArr = [];
    let tmpPos = {};

    for (let i = 0; i < arr.length; i++) {
      // sort possibleMoves according to the distance between
      //  current positions and destination position
      const [hyp, deg] = getAngle(arr[i], dest);
      tmpPos[`${hyp}`] = arr[i];
    }
    // sort object by "keys"
    const sorted = Object.keys(tmpPos)
      .sort()
      .reduce((obj, key) => {
        obj[key] = tmpPos[key];
        return obj;
      }, {});
    Object.keys(sorted).forEach((k) => {
      tmpArr.push(sorted[k]);
    });
    return tmpArr;
  }

  return {
    getAngle,
    validPos,
    movePos,
    createKnightMovementMap,
    printMappedMoves,
    findPossibleMoveFor,
    returnSquare,
    returnArrayIndex,
    arrValComp,
    isPosNew,
    sortByDistance,
  };
}

export { dirTranslation, mapBoard, travellingKnight };
