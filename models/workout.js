const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkouitSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
       
       { 
        type: {
            type: String,
            trim: true,
            required: true
        },
        name:{
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: { 
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
       }
    ]
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;