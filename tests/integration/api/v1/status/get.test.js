test("Get to /api/v1/status shoul return 200", async () => {
  const responseCode = await fetch("http://localhost:3000/api/v1/status");
  expect(responseCode.status).toBe(200);
});
