import Note from '../models/Notes.js';

export async function getAllNotes(req, res) {
    try{
         const note=await Note.find();
         res.status(200).json(note);
    } catch(error){
        res.status(500).json({message:error.message});
        console.error('Error fetching notes:', error);
    }
};

export async function createNote(req, res) {
    try{
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        const saved=await newNote.save();
        res.status(201).json(saved);  

    }catch(error){
 console.error('Error creating note:', error);
 res.status(500).json({message:error.message});
    }
}


export async function updateNotes(req, res) {
    try{
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updatedNote){
            return res.status(404).json({message:"Note not found"});
        }   
         res.status(201).json({message:"Notes updated successfully"});

    }catch(error){
    console.error('Error updating note:', error);
    res.status(500).json({message:error.message});
    }
   
};
export async function deleteNote(req, res) {
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message:"Note not found"});
        }   
        res.status(200).json({message:"Notes deleted successfully"});
    }catch(error){
        console.error('Error deleting note:', error);
        res.status(500).json({message:error.message});
    }
};