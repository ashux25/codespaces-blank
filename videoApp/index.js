import  express  from "express";

const app = express()

app.get("/",(req,res)=>{
    res.status(200).json("Working Fine")
})
app.listen(3000, () => {
  console.log('Express server initialized on port 3000');
});