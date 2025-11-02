import { model, Mongoose, Schema,Types } from "mongoose";


const sourceSchema = new Schema({
   type:{
      type:String,
      enum:["youtube"],
   },
   link:{
      type :String,
   }
},{
   id:false
});

const notesSchema = new Schema({
   title:{
      type:String,
      require:true
   },
   createdBy:{
      type:Types.ObjectId,
      ref:"users",
      require:true
   },
   content:{
      type:String,
       require:true
   },
   source:sourceSchema
},{
   timestamps:true
});


const NoteModel = model('notes',notesSchema);

export default NoteModel