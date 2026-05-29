/* knightTravails.test.js */
import { board } from "./knightTravails.js";


describe("validPos() test group", () => {
  test("No arg passed in", () => {
    expect(board.validPos()).toEqual(undefined);
  });
  test("Non array passed in", () => {
    expect(board.validPos(5)).toEqual(undefined);
  });
  test("Array passed in, edge case [0, 0]", () => {
    expect(board.validPos([0, 0])).toEqual(true);
  });
  test("Array passed in, edge case [7, 0]", () => {
    expect(board.validPos([7, 0])).toEqual(true);
  });
  test("Array passed in, edge case [0, 7]", () => {
    expect(board.validPos([0, 7])).toEqual(true);
  });
  test("Array passed in, edge case [7, 7]", () => {
    expect(board.validPos([7, 7])).toEqual(true);
  });
  test("Array passed in, edge case [0, -1]", () => {
    expect(board.validPos([0, -1])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 0]", () => {
    expect(board.validPos([-1, 0])).toEqual(false);
  });
  test("Array passed in, edge case [-1, -1]", () => {
    expect(board.validPos([-1, -1])).toEqual(false);
  });
  test("Array passed in, edge case [0, 8]", () => {
    expect(board.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 8]", () => {
    expect(board.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [-1, 7]", () => {
    expect(board.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 0]", () => {
    expect(board.validPos([0, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, -1]", () => {
    expect(board.validPos([-1, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, -1]", () => {
    expect(board.validPos([-1, 7])).toEqual(false);
  });
  test("Array passed in, edge case [8, 8]", () => {
    expect(board.validPos([8, 8])).toEqual(false);
  });
  test("Array passed in, edge case [7, 8]", () => {
    expect(board.validPos([7, 8])).toEqual(false);
  });
  test("Array passed in, edge case [8, 7]", () => {
    expect(board.validPos([8, 7])).toEqual(false);
  });
});

describe("Tests for sameValues()", () => {
  test("No arguments", () => {
    expect(board.sameValues()).toEqual(undefined);
  });
  test("With only 1 argument", () => {
    expect(board.sameValues(4)).toEqual(undefined);
  });
  test("With only 1 argument, array with 2 elem", () => {
    expect(board.sameValues([2, 2])).toEqual(undefined);
  });
  test("With 2 argument, 2 numbers", () => {
    expect(board.sameValues(2, 3)).toEqual(undefined);
  });
  test("With 2 argument, 1 array with 2 elem and a number", () => {
    expect(board.sameValues([2, 2], 4)).toEqual(undefined);
  });
  test("With 2 argument, 1 array with 2 elem and a number", () => {
    expect(board.sameValues(2, [2, 2])).toEqual(undefined);
  });
  test("With 2 argument, 2 array with different length", () => {
    expect(board.sameValues([2], [2, 2])).toEqual(false);
  });
  test("With 2 argument, 2 array with different values", () => {
    expect(board.sameValues([2, 3], [2, 2])).toEqual(false);
  });
  test("With 2 argument, 2 array with same values", () => {
    expect(board.sameValues([2, 3], [2, 3])).toEqual(true);
  });
});
