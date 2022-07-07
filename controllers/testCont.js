exports.test = (req, res) => {
  res.json({ message: "hello there" });
  console.log(`res sent controllers/user.js at ${Date().toLocaleString()}`)
};