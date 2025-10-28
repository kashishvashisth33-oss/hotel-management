const express= require('express');
const mongose = require ('mongose');
const cors= require('cors');

const app =express();

app.use(cors());
app.use( express.json());

app.post('/todo',(req,res) =>{
    // logic to post todo
    res.json({
        title:title,
        done:done

    })

})

app.get ('/todo',(req,res) => {
// logic for fetching todo
res.json({
    message: "todo is received"
})

})

app.delete ('/todo',(req,res) => {
    // logic for delete todo 
    res.json({
        message:"todo is deleted"
    })
})

app.listen(3000, ()=>{
    console.log('Example app listening on port 3000')
})