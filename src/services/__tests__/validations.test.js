const { isEmpty, checkGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - checkGamerTag", () => {
    test("should return true as the gametag is equals or more than 8 char", () => {
        const result = checkGamerTag("aaaaaaaaa!");
        expect(result).toBe(true);
    });

    test("should return false as the gametag is less than 8 char", () => {
        const result = checkGamerTag("aaaa!");
        expect(result).toBe(false);
    });

    test("should return true as the gametag has at least 1 special char", () => {
        const result = checkGamerTag("aaaaaaaaa!");
        expect(result).toBe(true);
    });

    test("should return false as the gametag has no special char", () => {
        const result = checkGamerTag("aaaaaaaaa");
        expect(result).toBe(false);
    });
});