// Signin route
app. post ('/signin',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password ;
try{
    const user=await usermodel.findone({
        email:email,
        password:password
    })
    if(!user){
        res.json({
            response:"user not found"
        })
        return;
    }
    res.json({
        message:"signed in",
    })
}
catch(e){

    res.json({
        error:"wrong credentials"
    })
}
})