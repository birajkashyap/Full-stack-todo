const express=require("express")
const { createTodo, updateTodo } = require("./type")
const {todo}=require("./db")
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())

app.post("/todo",async function(req,res){

    const createPayload=req.body
    const parsePayload=createTodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
           msg: "You sent the wrong input"
        })

        return
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })


    res.json({
        msg:"Todo added!"
    })


    

})

app.get("/todo",async function(req,res){

    const todos =await todo.find()
    res.json({
        todos
    })


    
})

app.put("/completed",async function(req,res){

    const createPayload=req.body
    const parsePayload=updateTodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs."
        })
    } 

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked  as complete!"
    })


    
})



app.listen(3000)
