const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// HANDLING UNCAUGHT EXCEPTION ERROR

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to exceptional server error`);
  process.exit(1);
});

// ENV CONFIGS
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

// DB CONFIGS
connectDatabase();

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

// UNHANDLED PROMISE REJECTION ERROR

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to internal server error`);

  server.close(() => {
    process.exit(1);
  });
});
