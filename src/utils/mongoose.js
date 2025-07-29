import { Server } from "socket.io";
import cors from "cors";
const mongoose = require("mongoose");
const server = http.createServer(app);
import http from "http";
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use(cors());

io.on("connection", (socket) => {
    console.log("🔌 User connected:", socket.id);

    socket.on("send_message", (data) => {
        console.log("📨 Message:", data);
        io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
    });
});
