export async function getAllNotes(req, res) {
    res.status(200).send("Hello from backend and front");
};

export async function createNote(req, res) {
    res.status(201).json({message:"Notes created successfully"});
};

export async function updateNotes(req, res) {
    res.status(201).json({message:"Notes updated successfully"});
};
export async function deleteNote(req, res) {
    res.status(201).jso({message:"Notes deleted successfully"});
};