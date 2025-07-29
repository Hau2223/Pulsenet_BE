const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swaggerUI");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const http = require("http");
dotenv.config({ path: ".env" });
const server = http.createServer(app); 
const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    console.log('✅ Connected to MongoDB'); 
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: `
        .swagger-ui {
            padding-bottom: 30px; 
        }
    `,
  })
);

const userRou = require("./routes/userRou");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: true,
    credentials: true,
  })
);
app.use("/api/user", userRou);

app.use(cors());

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 Swagger UI at http://localhost:${PORT}/api-docs`);
});
