import { expect } from "chai";
import { isApproved } from "../../src/school.js";

describe("IsApproved function", () => {
  it("shoud be able to approved with 10 and 10 grade", () => {
    const result = isApproved(10, 10);
    expect(result).to.equal(true);
  });

  it("shoud be able to approved with 6.5 and 6.5 grade", () => {
    const result = isApproved(6.5, 6.5);
    expect(result).to.equal(true);
  });

  it("shoud be able to approved with 6 average", () => {
    const result = isApproved(6, 6);
    expect(result).to.equal(true);
  });

  it("shoudn't be able to approved with 0 and 0 grade", () => {
    const result = isApproved(0, 0);
    expect(result).to.equal(false);
  });

  it("shoudn't be able to approved with negative grade", () => {
    const result = isApproved(-1, -1);
    expect(result).to.equal(false);
  });

  it("shoudn't be able to approved with character", () => {
    const result = isApproved("A", -1);
    expect(result).to.equal(false);
  });
});
