import http from 'http';
import express from 'express';
import {Server} from 'socket.io';
import cors from 'cors';
import { SetA } from './Quest/questions.js';


const App = express();
const server = http.createServer(App);
const io = new Server(server,{
	cors:{
		origin: ["https://neilit.netlify.app","*"],
		methods: ['GET','POST'],
		credentials: true
         }
});

App.use(cors({
	origin: ["https://neilit.netlify.app","*"],
	methods: ["GET","POST"]
}));

const PORT = process.env.PORT;

io.on('connection',(socket) => {
        console.info(`User ${socket.id} connected!`);

        socket.on('Active',(msg) => {
                io.emit('Active',(msg));
        });

        socket.on('disconnect',()=>{
                console.info(`User ${socket.id} disconnected`);
        });

});

App.get("/quiz", (req, res) => {
  res.json(SetA()); 
});

server.listen(PORT,(err) => err ? console.err('Error establishing the connection') : console.info('Connection established successfully!'));