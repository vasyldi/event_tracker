test("Should be fine", () => {
  console.log(process.env.NODE_ENV);

  const a = 2 + 3;
  expect(a).toBe(5);
});
