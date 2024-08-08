import mongoose from "mongoose"

const todosSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"subTodos"
            }
        ]//array of subTodos
    },
    {timestamps: true}
)

export const todos = mongoose.model("todos",todosSchema);