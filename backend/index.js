import express from 'express'
import DB from "./DBConnection.js";
import cors from 'cors';
import { AddUser} from "./Routing.js";
import { GetAllUser } from './Routing.js';
import { LoadPrevData } from './Routing.js';
import {UpdateUserData} from './Routing.js'
import { ReadUserData } from './Routing.js';
import {DeleteUserData} from './Routing.js';
import bodyParser from "body-parser";

const urll='http://localhost:8000'
const app= express();

// to deal with different port issue 
app.use(cors());

// to deal with POST Api data
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// call routing(setting default endpoint)
app.post('/add' , AddUser);
app.get('/all', GetAllUser);
app.get('/:id', LoadPrevData)
app.post('/:id',UpdateUserData)
app.get('/read/:id',ReadUserData)
app.delete('/:id',DeleteUserData)


// call connection
DB();

// creating express server
const port=8000;

app.listen(port, ()=>console.log(`server chal raha hai ! ${port}`))

