import express from 'express';
import { getAllNotes,createNote,updateNotes,deleteNote } from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post("/",createNote);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNote);

export default router;

//mongodb+srv://tanish9495_db_user:X6BptCQ7DxoCggdB@cluster0.gzk69hv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0