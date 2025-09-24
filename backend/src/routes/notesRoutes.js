import express from 'express';
import { getAllNotes,createNote,updateNotes,deleteNote } from './controllers/notesController';

const router = express.Router();

router.get('/', getAllNotes);

router.post("/",createNote);

router.put("/",updateNotes);

router.delete("/",deleteNote);

export default router;