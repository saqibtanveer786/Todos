
import mongoose from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        default: "General"
    }
});

module.exports = mongoose.model('user', notesSchema)