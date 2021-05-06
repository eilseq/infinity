import { getUniverses, getStars } from "./helpers";
import { rest } from "./constants";

test("get universes succesfully", async () => {
  const { data } = await getUniverses();
  expect(Array.isArray(data)).toBe(true);

  for (let universe of data) {
    expect(rest.isUniverse(universe)).toBe(true);
  }
});

test("get stars succesfully", async () => {
  const { data } = await getStars();
  expect(Array.isArray(data)).toBe(true);

  for (let star of data) {
    expect(rest.isStar(star)).toBe(true);
  }
});
