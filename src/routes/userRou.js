const express = require("express");
const app = express();

/**
 * @swagger
 * /api/user/hello:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Thành công
 */


app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = app;
