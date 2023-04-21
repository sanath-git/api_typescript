
import { Schema, model, Document } from 'mongoose';

interface todo extends Document{
    title:string,
    description?:string,
    completed:boolean

}

const TodoSchema:Schema = new Schema({
    title:{type:String,required:true},
    description:{type:String},
    completed:{type:Boolean,required:true,default:false}
});

const todo = model<todo>("Todo",TodoSchema);

export default todo;