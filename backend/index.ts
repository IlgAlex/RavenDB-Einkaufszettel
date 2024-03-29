import express from 'express';
import cors from 'cors';
import { AppRouter } from './src/App.router';


const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: true}));          
app.use(express.json());        
app.use(cors({ origin: 'http://localhost:4200', credentials: true })); // Erlaube CORS-Anfragen von http://localhost:4200 (also vom Frontend)

app.use('/api', router);
router.use('/app', AppRouter);

app.listen(8070, () => {
    console.log(`Server running...`);   
})