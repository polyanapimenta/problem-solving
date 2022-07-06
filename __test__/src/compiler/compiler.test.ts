import { compiler } from "../../../src/compiler/compiler";

describe("Compiler Test", () => {
  test("Should validate input and return false to invalid string", () => {
    const input = "{{{[[[(]]]}}}";
    const received = compiler(input);
    expect(received).toBeFalsy();
  })
})