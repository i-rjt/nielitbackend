import http from 'http'
import express from 'express'
import {Server} from 'socket.io'
import cors from 'cors'
import {SetA,SetB,SetC,SetD,SetE,SetF} from './Quest/AlvlQuizQuestions.js';
import {quesSet} from './Quest/repeatQues.js';

const App = express();
const httpserver = http.createServer(App);
const io = new Server(httpserver, { cors: {
	// origin: ['https://neilit.netlify.app','https://nerdify.srcbay.com'],
	origin: 'http://localhost:5173',
	methods: ['GET','POST', 'PUT'],
	credentials: true
}});


App.use(express.json());

App.use(cors({
	// origin: ['https://neilit.netlify.app','https://nerdify.srcbay.com'],
	origin: 'http://localhost:5173',
	methods : ['GET', 'POST', 'PUT'],
	credentials: true
}));

App.get("/notes",(req,res) => {
	res.json(quesSet())
})

App.get("/ques",(req,res) => {
	res.json(SetA());
});

const PORT = process.env.PORT || 5172;

io.on('connection',(socket) => {
	console.info(`User ${socket.id} connected!`);

	socket.on('Active',(msg) => {
		io.emit('Active',(msg));
	});

	socket.on('disconnect',()=>{
		console.info(`User ${socket.id} disconnected!`);
	});

});

httpserver.listen(PORT,(err) => err ? console.err('Error establishing the connection') : console.info('Connection established successfully!'));

