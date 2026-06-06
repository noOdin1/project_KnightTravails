/* main.js */
import {
  dirTranslation,
  mapBoard,
  travellingKnight,
} from "./knightTravails.js";
import { Tree } from "./binary_search_tree.js";
import { argv } from "node:process";

(() => {
  // manual movement
  console.log("Direction: " + board.dir([0, 0], [0, 6]));
  console.log("Direction: " + board.dir([0, 0], [2, 1]));
  console.log("Direction: " + board.dir([0, 0], [1, 2]));
  console.log("Direction: " + board.dir([7, 0], [0, 7]));
  console.log("Direction: " + board.dir([7, 6], [0, 2]));
  console.log("mapBoard[0][0]: " + mapBoard[7][0]);
  console.log("mapBoard[0][0]: " + mapBoard[0][7]);
  console.log("mapBoard[0][0]: " + mapBoard[0][0]);
  console.log("mapBoard[0][0]: " + mapBoard[2][6]);

  console.log("new calculation");
  let y1 = 1;
  let x1 = 6;
  let y2 = 0;
  let x2 = 7;
  let tmpPos1 = [y1, x1];
  let tmpPos2 = [y2, x2];
  let direction1;
  let tmpArr = [tmpPos1];

  let count = 0;
  while (!board.sameValues(tmpPos1, tmpPos2) && count < 16) {
    let direction1 = board.dir(tmpPos1, tmpPos2);
    // Diversion
    tmpArr.forEach((x) => {
      if (board.sameValues(board.movePos(tmpPos1, direction1), x)) {
        direction1 = board.divert90(direction1);
      }
    });
    if (board.validPos(board.movePos(tmpPos1, direction1))) {
      tmpPos1 = board.movePos(tmpPos1, direction1);
    } else {
      // search for a valid position to move to
      // let altPos1 = board.movePos(tmpPos1, direction1);
      // for (const dirValue of Object.values(dirTranslation)) {
      // let altPos1;
      let found = false;
      let tmpDir;
      Object.keys(dirTranslation).forEach((key) => {
        console.log("direction: " + key);
        if (board.validPos(board.movePos(tmpPos1, key)) && !found) {
          // altPos1 = board.movePos(tmpPos1, key);
          tmpDir = key;
          found = true;
        }
      });
      tmpPos1 = board.movePos(tmpPos1, tmpDir);
      console.log(
        "Direction: " +
          direction1 +
          ", tmpPos: " +
          tmpPos1 +
          ", oriPos: " +
          mapBoard[y1][x1] +
          ", newPos: " +
          mapBoard[tmpPos1[0]][tmpPos1[1]] +
          ", destPos: " +
          mapBoard[y2][x2],
      );
    }
    console.log(
      "Direction: " +
        direction1 +
        ", tmpPos: " +
        tmpPos1 +
        ", oriPos: " +
        mapBoard[y1][x1] +
        ", newPos: " +
        mapBoard[tmpPos1[0]][tmpPos1[1]] +
        ", destPos: " +
        mapBoard[y2][x2] +
        ", count: " +
        count++,
    );
    tmpArr.push(tmpPos1);
    console.dir(tmpArr);
  }
})();
