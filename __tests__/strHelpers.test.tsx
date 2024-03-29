import { titleCase } from "@/utils/strHelpers";
import "@testing-library/jest-dom";

describe("str Helpers", () => {
  it("titleCase function returns value correctly", () => {
    const result1 = titleCase("WIFI");
    const result2 = titleCase("gym");
    const result3 = titleCase("tITle");

    expect(result1).toBe("Wifi");
    expect(result2).toBe("Gym");
    expect(result3).toBe("Title");
  });
});
