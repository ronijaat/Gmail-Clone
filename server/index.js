import express from 'express'
import cors from 'cors';

import Connection from './database/db.js';
import router from './routes/routes.js'

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 8000;

Connection();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})