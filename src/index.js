const { app } = require("./server");
const mongoConnect = require("./db");

async function init() {
  const port = process.env.PORT || 4000;

  await mongoConnect();

  app.listen({ port }, () => {
    console.log("\x1b[32m%s\x1b[0m", `Server is running on port ${port}`);
  });
}

init();
