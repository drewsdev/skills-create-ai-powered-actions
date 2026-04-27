const { run } = require("./main");

run().catch(error => {
  console.error('Action failed:', error);
  process.exit(1);
});