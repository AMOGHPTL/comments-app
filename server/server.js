import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Your React app port
    credentials: true
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let comments = [
{    "id":1,    
    "username":"nick",
    "comment":"hello guys"
},
{    "id":2,
     "username":"sam",
    "comment":"yo nick wassup?"
},
{    "id":3,
     "username":"ray",
    "comment":"im not well guys"
}
]

app.get("/comments",(req,res)=>{
    res.json(comments)
})

app.get("/comments/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    
    if (!comment) {
        return res.status(404).json({error: "Comment not found"});
    }
    
    res.json(comment);
});

app.get("/comments/:id/edit",(req,res)=>{
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    res.json(comment);
})


app.patch("/comments/:id/edit",(req,res)=>{
    const id = parseInt(req.params.id);
    const newComment = req.body;
    const comment = comments.find(c => c.id === id);
    comment.comment = newComment.comment;
    res.send(newComment);
})

app.post("/comments/new",(req,res)=>{
    const newComment = req.body;
    comments.push({"id":comments.length+1,...newComment});
    res.send(newComment);
})

app.listen(5000,()=>{console.log("serving on Port 5000")});
