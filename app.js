import express from "express";
import { Server } from "socket.io";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./src/routes/index.routes.js";

import socketConfig from "./config/socket.config.js"

import dotenv from "dotenv";
import onConnection from "./src/services/socket/index.service.js";
dotenv.config();


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1', routes);


app.get('/', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Welcome to the Node.js, Express and Socket.io API'
    });
});

const server = http.createServer(app);
const PORT = process.env.PORT || 4200;

const io = new Server(server, socketConfig);

io.on('connection', onConnection(io));

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
