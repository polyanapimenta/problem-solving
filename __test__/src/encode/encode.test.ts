import { encode } from "../../../src/encode/encode";

describe("Encode", () => {
  test("Input: 'aaaabbccc' should be equal to Output: '4a2b3c'", () => {
    const result = encode("aaaabbccc");

    expect(result).toBe("4a2b3c");
  });

  test("Input: 'aaabbcccd' should be equal to Output: '3a2b3c1d'", () => {
    const result = encode("aaabbcccd");

    expect(result).toBe("3a2b3c1d");
  });

  test("Input: 'aaaabbccca' should be equal to Output: '4a2b3c1a'", () => {
    const result = encode("aaaabbccca");

    expect(result).toBe("4a2b3c1a");
  });

  test("Input: 'aabccac' should be equal to Output: '2a1b2c1a1c'", () => {
    const result = encode("aabccac");

    expect(result).toBe("2a1b2c1a1c");
  });

  test("Input: 'abcd' should be equal to Output: '1a1b1c1d'", () => {
    const result = encode("abcd");

    expect(result).toBe("1a1b1c1d");
  });

  test("Input: 'eeeeeeeee' should be equal to Output: '9e'", () => {
    const result = encode("eeeeeeeee");

    expect(result).toBe("9e");
  });

  test("Input: '' should be equal to Output: 'Input is empty'", () => {
    const result = encode("");

    expect(result).toBe("Input is empty");
  });
});