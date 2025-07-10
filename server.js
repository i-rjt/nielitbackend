import http from 'http'
import express from 'express'
import {Server} from 'socket.io'
import cors from 'cors'
import {SetAA,SetBA,SetCA,SetDA,SetEA,SetFA} from './Quest/AlvlQuizQuestions.js';
import {SetA,SetB,SetC,SetD,SetE,SetF,SetG,SetH,SetI, SetJ,SetK,SetL, SetM,SetN,SetO,SetP,SetQ,SetR,SetS,SetT,SetU,SetV,SetW,SetX,SetY,SetZ} from './PythonQuest/pyQuiz.js';
import {quesSet} from './Quest/repeatQues.js';

const App = express();
const httpserver = http.createServer(App);
const io = new Server(httpserver, { cors: {
	origin: ['https://neilit.netlify.app','https://nerdify.srcbay.com'],
	// origin: 'http://localhost:5173',
	methods: ['GET','POST', 'PUT'],
	credentials: true
}});


App.use(express.json());

App.use(cors({
	origin: ['https://neilit.netlify.app','https://nerdify.srcbay.com'],
	// origin: 'http://localhost:5173',
	methods : ['GET', 'POST', 'PUT'],
	credentials: true
}));

App.get("/notes",(req,res) => {
	res.json(quesSet())
})

App.get('/python/set1',(req,res) =>{
	res.json(SetA())
})
App.get('/python/set2',(req,res) =>{
	res.json(SetB())
})
App.get('/python/set3',(req,res) =>{
	res.json(SetC())
})
App.get('/python/set4',(req,res) =>{
	res.json(SetD())
})
App.get('/python/set5',(req,res) =>{
	res.json(SetE())
})
App.get('/python/set6',(req,res) =>{
	res.json(SetF())
})
App.get('/python/set7',(req,res) =>{
	res.json(SetG())
})
App.get('/python/set8',(req,res) =>{
	res.json(SetH())
})
App.get('/python/set9',(req,res) =>{
	res.json(SetI())
})
App.get('/python/set10',(req,res) =>{
	res.json(SetJ())
})
App.get('/python/set11',(req,res) =>{
	res.json(SetK())
})
App.get('/python/set12',(req,res) =>{
	res.json(SetL())
})
App.get('/python/set13',(req,res) =>{
	res.json(SetM())
})
App.get('/python/set14',(req,res) =>{
	res.json(SetN())
})
App.get('/python/set15',(req,res) =>{
	res.json(SetO())
})
App.get('/python/set16',(req,res) =>{
	res.json(SetP())
})
App.get('/python/set17',(req,res) =>{
	res.json(SetQ())
})
App.get('/python/set18',(req,res) =>{
	res.json(SetR())
})
App.get('/python/set19',(req,res) =>{
	res.json(SetS())
})
App.get('/python/set20',(req,res) =>{
	res.json(SetT())
})
App.get('/python/set21',(req,res) =>{
	res.json(SetU())
})
App.get('/python/set22',(req,res) =>{
	res.json(SetV())
})
App.get('/python/set23',(req,res) =>{
	res.json(SetW())
})
App.get('/python/set24',(req,res) =>{
	res.json(SetX())
})
App.get('/python/set25',(req,res) =>{
	res.json(SetY())
})
App.get('/python/set26',(req,res) =>{
	res.json(SetZ())
})



App.get("/co/quiz",(req,res) => {
	res.json(SetAA());
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

