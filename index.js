const app = require("./app");
const authRoutes = require("./routes/auth");
const port = process.env.PORT || 5000;

app.use("/api/auth/", authRoutes);

app.listen(port, () => {
  console.log(`Server has been started on ${port}`);
});
