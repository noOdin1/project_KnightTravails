/* knightTravails.test.js */


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
