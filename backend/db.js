const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://birajkashyap:S%40hil_2003@cluster0.iwwj2uo.mongodb.net/todosNew")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema)

module.exports={
    todo
}