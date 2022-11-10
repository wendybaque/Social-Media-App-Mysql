import Express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";

const app = Express();

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);

// Backend config
app.listen(5000, () => {
  console.log("API working !");
});
