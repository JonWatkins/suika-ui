import * as utils from "../src/utils";

describe("utils", () => {
  it("should have a function to merge class names", () => {
    expect(utils.mergeClassNames("old", "new")).toBe("old new");
  });

  it("should have a function to fix element options", () => {
    const opts = utils.fixOptions({ a: 1 }, { b: 2 });
    expect(opts.a).toBe(1);
    expect(opts.b).toBe(2);
  });
});
