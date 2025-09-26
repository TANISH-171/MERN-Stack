import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js'
import 'dotenv/config';

const app=express();
const PORT=process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/api/notes",notesRoutes);
console.log('MONGO_URI present?', !!process.env.MONGODB_URI);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});