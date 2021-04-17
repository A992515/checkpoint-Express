const { static } = require("express")
const express=require("express")
const app=express()

const logger=(req,res,next)=>{
    next()
}
// app.use(static("Public"))
app.get("/",logger,(req,res)=>{
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();
    if ((n>=9 && n<=17) && (day != 6 || day !=7)) {
        res.sendFile(__dirname+"/Public/Home.html")
    } else {
        res.sendFile(__dirname+"/Public/Close.html")
    }
})

app.get("/Contact",logger,(req,res)=>{
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();
    if ((n>=9 && n<=17) && (day != 6 || day !=7)) {
    res.sendFile(__dirname+"/Public/Contact.html")
} else {
    res.sendFile(__dirname+"/Public/Close.html")
}
})
app.get("/Services",logger,(req,res)=>{
    var d = new Date();
    var n = d.getHours();
    var day = d.getDay();
    if ((n>=9 && n<=17) && (day != 6 || day !=7)) {
    res.sendFile(__dirname+"/Public/Services.html")
} else {
    res.sendFile(__dirname+"/Public/Close.html")
}
})
app.get("/Css/style.css",logger,(req,res)=>{
    res.sendFile(__dirname+"/Public/Css/style.css")
})




const port=5100
app.listen(port,()=>{
console.log(`server running on port ${port}`)
})