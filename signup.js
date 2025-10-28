// Signup route
app. post('/signup',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const user=await usermodel.create({
        email,
        password,
    })
    res.json({
        messsage:"signed up"
    })
})