import noteService from "../services/note.service.js"

const createNote = async(req,res)=>{
    try {
        console.log('reqBody::',req.source)
        const results = await noteService.createNote(req.body.source,"")
        return results
    } catch (error) {
        res.status(201).json({})
    }
}

export default {createNote}