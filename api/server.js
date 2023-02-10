try {
  const app = require("./app");
  console.log("calling server");
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
} catch (error) {
    console.log(error)
}
