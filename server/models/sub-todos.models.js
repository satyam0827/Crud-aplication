import mongoose, { mongo } from "mongoose"

const subTodosSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    },
    {timestamps:true}
)

export const subTodos = mongoose.model("subTodos",subTodosSchema)