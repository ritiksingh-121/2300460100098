require("dotenv").config();

const Log = require("./logger");

(async () => {
  const result = await Log(
    "backend",
    "info",
    "service",
    "Application started"
  );

  console.log(result);
})();